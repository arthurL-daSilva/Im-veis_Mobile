import { Cabeçalho, Img_voltar, Cadastrar, Top } from './styles.jsx'
import voltar from '../../images/voltar.png'
import mais from '../../images/mais.png'
import { Link } from 'react-router-dom'

function Header(){

    return(
    <Top>
        <Cabeçalho>
            <Img_voltar src={voltar} alt="voltar" />
            <Cadastrar>
                <Link to={'/Tela2'}>
                <img src={mais} alt="adicionar" />
                <span>Cadastrar imóvel</span>
                </Link>
            </Cadastrar>
        </Cabeçalho>
        <h2>Bem-Vindo, Raphael!</h2>
    </Top>
    )
}

export default Header