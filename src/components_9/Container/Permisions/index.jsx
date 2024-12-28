import { Container } from "./style"
import Chek from "../../../images/Checked.png"
import notChek from "../../../images/Not_checked.png"

function Home(){
    return(
        <Container>
            <h1>Permissões</h1>
            <div>
                <img src={Chek} alt="checked" />
                <p>Pets são permitidos</p>
            </div>
            <div>
                <img src={Chek} alt="checked" />
                <p>Fumantes são permitidos</p>
            </div>
            <div>
                <img src={Chek} alt="checked" />
                <p>Casais são permitidos</p>
            </div>
            <div>
                <img src={notChek} alt="notchecked" />
                <p>Visitas não são permitidos</p>
            </div>
            <div>
                <img src={notChek} alt="notchecked" />
                <p>Crianças não são permitidos</p>
            </div>
        </Container>
    )
}

export default Home