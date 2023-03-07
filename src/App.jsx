import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Navbar from './components/Navbar'
import Find from './pages/find/Find'
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './hooks/useTheme'


function App() {
  
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar/>
        <div className="mainContent">
        <ThemeSelector />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/recipes/:id' element={<Recipe />} />
            <Route path='/find' element={<Find />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
