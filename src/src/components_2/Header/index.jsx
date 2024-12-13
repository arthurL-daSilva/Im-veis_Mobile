import { Top } from './styles.jsx'
import voltar from '../../images/voltar.png'
import { Link } from 'react-router-dom'

function Header(){

    return(
    <Top>
        <Link to={'/'}>
            <img src={voltar} alt="voltar" />
        </Link>
        <p>Para começarmos, precisamos de alguns dados</p>
    </Top>
    )
}

export default Header