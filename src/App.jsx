import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a nuestra página"}  />
      
    </div>
    
  )
}

export default App
