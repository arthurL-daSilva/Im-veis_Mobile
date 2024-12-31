import { Action_Btn, Cam_button, Gallery_button } from './style'
import { Link } from 'react-router-dom'
function Action(){

    return(
        <Action_Btn>
            <Link to={'/tela2'}>
            <Cam_button>Salvar e cadastrar outro</Cam_button>
            </Link>
            <Link to={'/tela11'}>
            <Gallery_button>Finalizar</Gallery_button>
            </Link>
        </Action_Btn>
    )
}

export default Action