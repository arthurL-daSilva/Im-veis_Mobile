import { Top } from './styles.jsx'
import voltar from '../../images/voltar.png'

function Header(){

    return(
    <Top>
        <a href="https://www.youtube.com/">
        <img src={voltar} alt="voltar" />
        </a>
        <p>Para começarmos, precisamos de alguns dados</p>
    </Top>
    )
}

export default Header