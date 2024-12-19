import { Top, Cam_img } from './styles.jsx'
import voltar from '../../images/voltar.png'
import { Link } from 'react-router-dom'
import grav from '../../images/Grav.png'

function Header(){

    return(
    <Top>
        <Link to={'/tela5'}>
            <img src={voltar} alt="voltar" />
        </Link>
        <Cam_img src={grav} alt="camera" />
        <p>Agora é hora de fazer um vídeo do seu imóvel.</p>
        <h3>Você pode abrir a câmera ou subir o vídeo da sua galeria.</h3>
    </Top>
    )
}

export default Header