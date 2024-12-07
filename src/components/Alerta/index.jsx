import { Container } from './style'
import img_alert from '../../images/alerta.png'

function Alerta(){

    return(
        <Container>
            <img src={img_alert} alt="Alerta" />
            <div>
                <p>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</p>
            </div>
            <button>Cadastrar meu primeiro imóvel</button>
        </Container>
    )
}

export default Alerta