import { Container } from './style'
import img_alert from '../../images/alerta.png'
import { Link } from 'react-router-dom'

function Alerta(){

    return(
        <Container>
            <img src={img_alert} alt="Alerta" />
            <div>
                <p>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</p>
            </div>
            <Link to={'/Tela2'}>
            <button>Cadastrar meu primeiro imóvel</button>
            </Link>
        </Container>
    )
}

export default Alerta