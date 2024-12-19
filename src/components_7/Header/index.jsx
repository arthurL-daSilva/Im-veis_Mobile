import { Top, Cam_img } from './styles.jsx'
import voltar from '../../images/voltar.png'
import { Link } from 'react-router-dom'
import book from '../../images/book.png'

function Header(){

    return(
    <Top>
        <Link to={'/tela6'}>
            <img src={voltar} alt="voltar" />
        </Link>
        <Cam_img src={book} alt="camera" />
        <p>Agora você deve definir alguns valores importantes.</p>
        <h3>Tenha a responsabilidade de informar um valor que não seja abusivo.</h3>
    </Top>
    )
}

export default Header