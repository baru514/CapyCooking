import './Find.css'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../recipe/RecipeList'
export default function Find() {

  const [qParams, setqParams] = useSearchParams();
  const [query, setQuery] = useState('');
  
  const url = 'https://json-server-cc.onrender.com/recipes?q=' + query
  const { error, isPending, data } = useFetch(url)
  useEffect(()=>{
    setQuery(qParams.get('find_term'));
  },[qParams])

  return (
    <div className='find'>
      {<h2 className="page-title">Recipes including "{query}"</h2>}
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {!error && data && <RecipeList recipes={data} />}
    </div>
  )
}
