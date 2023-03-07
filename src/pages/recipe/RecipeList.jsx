import './RecipeList.css'
import { NavLink } from 'react-router-dom'
import deleteIcon from '../../images/delete.png'


export default function RecipeList({recipes}) {

  const handleDelete = async (id) => {
      const url = `https://json-server-cc.onrender.com/recipes/`+ id;
      await fetch(url, {
              method: "DELETE"
            })
      window.location.reload(false)
  }  
  
  if(recipes.length === 0){
    return <div className='error'>No recipes found!</div>
  }
  
  return (
    <>
    <div className='recipe-list'>
      {recipes.map((recipe)=>(
        <div className='card' key={recipe.id}>
          <h2>{recipe.title}</h2>
          <span>{recipe.cookingTime} to make.</span>
          <p>{recipe.method.substring(0, 70)}....</p>
          <NavLink to={`/recipes/${recipe.id}`}>Cook this</NavLink>
          <img src={deleteIcon} alt="delete icon" onClick={()=>
              handleDelete(recipe.id)}/>
        </div>
      ))}
    </div>
    </>
  )
}
