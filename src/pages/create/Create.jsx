import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { useFetch } from '../../hooks/useFetch';
import './Create.css'
import { useTheme } from '../../hooks/useTheme';

export default function Create() {

  const { color } = useTheme();
 
  
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [method, setMethod] = useState('');
  const [ing, setIng] = useState('');
  const [ings, setIngs] = useState(Array);
  const ingInput = useRef(null);
  const nav = useNavigate();
  const {postData: post, error, data} = useFetch('https://json-server-cc.onrender.com/recipes', 'POST')
  

  const handleClickIng = (e)=>{
    e.preventDefault();
    const item = ing.trim();
    if(item && !ings.includes(item)){
      setIngs((prevIngs)=>{
        return [...prevIngs, ing]
      })
    } 
    setIng('');
    ingInput.current.focus(null);
  } 

  const handleSubmit = (e)=>{
    e.preventDefault();
    post({ title, ingredients: ings, method, cookingTime: `${time} minutes` });
    setTitle('');
    setTime('');
    setMethod('');
    setIngs('');
    setTimeout(()=>{nav('/')}, 500);
  }
  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
        <h2>Add a new recipe</h2>
        <label><p>Recipe title:</p>
          <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title} required/>
        </label>
        <label><p>{`Cooking Time (minutes):`}</p>
          <input type='number' onChange={(e)=>setTime(e.target.value)} value={time} required/>
        </label>
        <label> <p>Recipe ingredients:</p>
          <div className='ing'>
            <input type='text' onChange={(e)=>(setIng(e.target.value))} value={ing} ref={ingInput}/>
            <Button 
              style={{background: color}}
              type='button' 
              onClick={handleClickIng}>add</Button>
          </div> 
          <span>{`Current ingredients: `}
            {ings && ings.map((item)=>(<em key={item}>{item}</em>))}
          </span>
        </label>
        <label><p>Recipe method:</p>
        <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <Button style={{background: color}} type='submit'>submit</Button>
      </form>
    </div>
  )
}

