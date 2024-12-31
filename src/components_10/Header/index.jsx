import { Top } from './styles.jsx'
import Done from '../../images/Done.png'


function Header(){

    return(
    <Top>
        <img src={Done} alt="Feito" />
        <p>Maravilha! Seu imóvel foi cadastrado com sucesso.</p>
        <h1>Você cadastrar outro imóvel ou finalizar por hora.</h1>
    </Top>
    )
}

export default Header