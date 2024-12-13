import { Top } from './styles.jsx'
import voltar from '../../images/voltar.png'
import { Link } from 'react-router-dom'

function Header(){

    return(
    <Top>
        <Link to={'/tela2'}>
            <img src={voltar} alt="voltar" />
        </Link>
        <p>Agora é hoda de dar mais detalhes</p>
    </Top>
    )
}

export default Header