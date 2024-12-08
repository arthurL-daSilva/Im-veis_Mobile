import { BrowserRouter, Route, Routes } from "react-router-dom"
import Tela1 from './Tela1.jsx'
import Tela2 from './Tela2.jsx'

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Tela1/>} />
                <Route path='/tela2' element={<Tela2/>} />
                <Route path='*' element={<h1>Notfound</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App