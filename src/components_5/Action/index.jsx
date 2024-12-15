import { Action_Btn, Cam_button, Gallery_button } from './style'
import { Link } from 'react-router-dom'
function Action(){

    return(
        <Action_Btn>
            <Link to={'/tela6'}>
            <Cam_button>Abrir a câmera</Cam_button>
            </Link>
            <Gallery_button>Abrir galeria</Gallery_button>
        </Action_Btn>
    )
}

export default Action