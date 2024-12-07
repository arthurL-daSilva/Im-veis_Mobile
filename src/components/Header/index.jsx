import { Cabeçalho, Img_voltar, Cadastrar, Top } from './styles.jsx'
import voltar from '../../images/voltar.png'
import mais from '../../images/mais.png'

function Header(){

    return(
    <Top>
        <Cabeçalho>
            <Img_voltar src={voltar} alt="voltar" />
            <Cadastrar>
                <img src={mais} alt="adicionar" />
                <span>Cadastrar imóvel</span>
            </Cadastrar>
        </Cabeçalho>
        <h2>Bem-Vindo, Raphael!</h2>
    </Top>
    )
}

export default Header