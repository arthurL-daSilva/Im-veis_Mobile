import { Top } from './styles.jsx'
import voltar from '../../images/voltar.png'

function Header(){

    return(
    <Top>
        <img src={voltar} alt="voltar" />
        <p>Para começarmos, precisamos de alguns dados</p>
    </Top>
    )
}

export default Header