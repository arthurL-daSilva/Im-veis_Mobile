import { Top } from './styles.jsx'
import voltar from '../../../images/voltar.png'
import { Link } from 'react-router-dom'

function Header(){

    return(
    <Top>
        <Link to={'/tela8'}>
            <img src={voltar} alt="voltar" />
        </Link>
        <p>Visualize e confirme o cadastro do seu imóvel</p>
    </Top>
    )
}

export default Header