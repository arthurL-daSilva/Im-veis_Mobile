import { Action_Btn } from './style'
import { Link } from 'react-router-dom'
function Action(){

    return(
        <Action_Btn>
            <Link to={'/tela10'}>
            <button>Finalizar cadastro do imóvel</button>
            </Link>
        </Action_Btn>
    )
}

export default Action