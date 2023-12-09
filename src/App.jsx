import { useState } from 'react'

import './App.css'
import Header from'./components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Header/>
       <div className="bg-indigo-600 w-full "></div>
       <div className="h-[500px]"></div>
      <Footer />
    </div>
     
    
  )
}

export default App
