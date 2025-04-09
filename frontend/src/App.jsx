import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AllRouter from './AllRouter'

function App() {

  return (
    <>
     <BrowserRouter>
         <AllRouter/>
      </BrowserRouter>

    </>
  )
}

export default App