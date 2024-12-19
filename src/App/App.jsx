import { BrowserRouter, Route, Routes } from "react-router-dom"
import Tela1 from './Telas/Tela1.jsx'
import Tela2 from './Telas/Tela2.jsx'
import Tela3 from './Telas/Tela3.jsx'
import Tela4 from './Telas/Tela4.jsx'
import Tela5 from './Telas/Tela5.jsx'
import Tela6 from './Telas/Tela6.jsx'
import Tela7 from './Telas/Tela7.jsx'
import Tela8 from './Telas/Tela8.jsx'

function App(){
    return(
        
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Tela1/>} />
                <Route path='/tela1' element={<Tela1/>} />
                <Route path='/tela2' element={<Tela2/>} />
                <Route path="/tela3" element={<Tela3/>} />
                <Route path="/tela4" element={<Tela4/>}/>
                <Route path="/tela5" element={<Tela5/>}/>
                <Route path="/tela6" element={<Tela6/>}/>
                <Route path="/tela7" element={<Tela7/>}/>
                <Route path="/tela8" element={<Tela8/>}/>
                <Route path='*' element={<h1>Notfound</h1>} />
            </Routes>
        </BrowserRouter>
        
    )
}

export default App