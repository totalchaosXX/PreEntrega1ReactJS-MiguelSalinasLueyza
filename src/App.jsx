import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/Content/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <ItemListContainer/>
    </>
  )
}

export default App
