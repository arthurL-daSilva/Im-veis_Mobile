import { Tipo } from './style'

function Form(){

    return(
        <Tipo>
            <select name="imóvel" id="">
                <option value="0">Tipo de imóvel</option>
                <option value="1">Casa</option>
                <option value="2">Apartamento</option>
                <option value="3">Outros</option>
            </select>
        </Tipo>
    )
}

export default Form