import { Line } from "./style"
import Foto from "../../../images/Foto.png"

function Home(){
    return(
        <Line>
            <p>Locado por Henrique Rodrigues</p>
            <img src={Foto} alt="Locador" />
        </Line>
    )   
}

export default Home