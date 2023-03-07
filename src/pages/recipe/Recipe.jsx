import './Recipe.css'
import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom';

export default function Recipe() {
  const { id } = useParams();
  const url = `https://json-server-cc.onrender.com/recipes/`+ id;
  console.log(url);
  const {data: recipe, isPending, error} = useFetch(url);

  return (
    <div className='recipe'>
      {isPending && <p className='loading'>Loading recipe...</p>}
      {error && !isPending && <p className='error'>{error}</p>}
      {recipe && !isPending && !error &&(
      <>
        <h1 className='page-title'>{recipe.title}</h1>
        <div>Takes {recipe.cookingTime} to cook.</div>
        <ul>
          {recipe.ingredients.map((item)=>(
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className='method'>Method: {recipe.method}</p>
      </> )}
    </div>
  )
}
