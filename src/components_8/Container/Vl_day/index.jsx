import { useState } from 'react'
import { Day } from './style'

function Home(){

    const [valor, setValor] = useState("")
    const InputEvent = (event) => {
        const inputValor = event.target.value
        const valorNumerico = inputValor.replace(/[^\d,.]/g, "")
        setValor(valorNumerico ? `R$ ${valorNumerico}` : "")
    }
    

    return(
        <Day>
            <p>Diária</p>
            <input value={valor} type="text" onChange={InputEvent} placeholder='Valor da diária' />
        </Day>
    )
}

export default Home