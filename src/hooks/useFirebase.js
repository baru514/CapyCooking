import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectFirebase } from "../firebase/config";

export  const useFirebase = ( id,method = "1") => {

  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState();
  const [singleData, setSingleData] = useState();
  const [searchedRecipes, setSearchedRecipes] = useState();
  const navigate = useNavigate();

  const postRecipe = async (doc) => {
    try{
     await projectFirebase.collection('recipes').add(doc);
     navigate('/')
    } catch(err) {
      console.log(err)
    }
  }

  const searchRecipe = (query) => {
    console.log(query);
    setIsPending(true)
      projectFirebase.collection('recipes').where('title','==', query).get().then((snapshot)=>{
        if(snapshot.empty){
          setError('No recipes to load!')
          setIsPending(false)
        }else{
          let result = [];
          snapshot.docs.forEach((doc)=>{
            result.push({id:doc.id, ...doc.data()})
          })
          setSearchedRecipes(result)
          setIsPending(false)
        }
      }).catch(err=>{
        setError(err.message);
        setIsPending(false);
      })
  }

  useEffect(()=>{

    const fetchData = () => {
      setIsPending(true)
      projectFirebase.collection('recipes').get().then((snapshot)=>{
        if(snapshot.empty){
          setError('No recipes to load!')
          setIsPending(false)
        }else{
          let result = [];
          snapshot.docs.forEach((doc)=>{
            result.push({id:doc.id, ...doc.data()})
          })
          setData(result)
          setIsPending(false)
        }
      }).catch(err=>{
        setError(err.message);
        setIsPending(false);
      })
    }
    
    const fetchRecipe = (id) => {
      setIsPending(true);

      projectFirebase.collection('recipes').doc(id).get().then((doc)=>{
        if(doc.exists){
          setIsPending(false)
          setSingleData(doc.data())
        }else{
          setError('Recipe does not exist in the directory!')
          setIsPending(false)
        }
      }).catch(err=>{
        setError(err.message);
        setIsPending(false);
      })
    }

    if(method === "1"){
      fetchData();
    }else if(method === "2"){
      fetchRecipe(id);
    }else if(method === "3"){
      postRecipe();
    }else if(method === "4"){
      searchRecipe();
    }
  },[])

  return {data, isPending, error, singleData, postRecipe, searchRecipe, searchedRecipes}
}
