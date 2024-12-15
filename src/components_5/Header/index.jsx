import { Top, Cam_img } from './styles.jsx'
import voltar from '../../images/voltar.png'
import { Link } from 'react-router-dom'
import cam from '../../images/cam.png'

function Header(){

    return(
    <Top>
        <Link to={'/tela4'}>
            <img src={voltar} alt="voltar" />
        </Link>
        <Cam_img src={cam} alt="camera" />
        <p>Agora é hora de fazer as fotos do seu imóvel.</p>
        <h3>Você pode abrir a câmera ou subir a foto da sua galeria.</h3>
    </Top>
    )
}

export default Header