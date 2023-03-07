import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Searchbar.css'

export default function Searchbar() {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();
  return (
    <div>
      <form className='searchbar' onSubmit={(e)=>(
        e.preventDefault(),
        navigate(`./find/?find_term=${term}`),
        setTerm('')
        )}>
        <input 
        id='search'
        type='text'
        onChange={(e)=>setTerm(e.target.value)}
        value={term}
        placeholder='Search recipe'
        required
        />
      </form>
    </div>
  )
}

