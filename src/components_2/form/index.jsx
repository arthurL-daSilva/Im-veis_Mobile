import { Teste, Teste2, Formulario, Description, Name, Max_Len, Addr, Num, Comp, City, City_UF } from './style'
import { useState } from 'react'

function Form(){  
    const [charCount, setCharCount] = useState(0)
    function ChargeInput(type){
        setCharCount(type.target.value.length)
    }

    return(
        <Formulario>
            <Name type="text" placeholder='Nome do imóvel'/>
            <p>O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede</p>
            <Description type="text" placeholder='Descrição' maxLength={250} onChange={ChargeInput}/>
            <Max_Len><span>{charCount}</span>/250</Max_Len>
            <Name type='text' placeholder='CEP' maxLength={9} />
            <Addr type='text' placeholder='Endereço'/>
            <div>
                <Num type='int' placeholder='Número'/>
                <Comp type='text' placeholder='Complemento'/>
            </div>
            <City_UF>
                <City type='text' placeholder='Cidade'/>
                <select name="UF">
                    <option value="0">UF</option>
                    <option value="1">SP</option>
                    <option value="2">RJ</option>
                    <option value="3">MG</option>
                    <option value="4">ES</option>
                </select>
            </City_UF>
            
        </Formulario>
    )
}

export default Form