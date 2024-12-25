import { Action_Btn } from './style'
import { Link } from 'react-router-dom'
function Action(){

    return(
        <Action_Btn>
            <Link to={'/tela9'}>
            <button>Continuar</button>
            </Link>
        </Action_Btn>
    )
}

export default Action