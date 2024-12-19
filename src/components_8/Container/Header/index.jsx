import { Top } from './styles.jsx'
import voltar from '../../../images/voltar.png'
import { Link } from 'react-router-dom'

function Header(){

    return(
    <Top>
        <Link to={'/tela7'}>
            <img src={voltar} alt="voltar" />
        </Link>
        <p>Defina os valores nos campos abaixo</p>
    </Top>
    )
}

export default Header