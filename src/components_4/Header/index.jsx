import { Top } from './styles.jsx'
import voltar from '../../images/voltar.png'
import { Link } from 'react-router-dom'

function Header(){

    return(
    <Top>
        <Link to={'/tela3'}>
            <img src={voltar} alt="voltar" />
        </Link>
        <p>Defina as comodidades e permissões do seu Poundsflats</p>
    </Top>
    )
}

export default Header