import './Home.css'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../recipe/RecipeList';

export default function Home() {
  const { data: recipes, isPending, error } = useFetch('https://json-server-cc.onrender.com/recipes');
  return (
    <div className='home'>
      {isPending && <p className='loading'>Loading recipes...</p>}
      {error && !isPending && <p className='error'>There was a problem fetching the data!</p>}
      {recipes && !isPending && !error && <RecipeList isPending={isPending} recipes={recipes} />}
    </div>
  )
}
