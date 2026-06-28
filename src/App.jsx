import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./pages/Login";
import Registro from "./pages/Registro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Registro/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>

    </BrowserRouter>
    


  )
}

export default App;