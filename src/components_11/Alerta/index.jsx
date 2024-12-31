import { Container, Text, Text_sup, Text_inf } from './style'
import Room from "../../images/Pic_room.png"
import Star from "../../images/Star.png"

function Alerta(){

    return(
        <Container>
            <img src={Room} alt="Quarto" />
            <Text>
                <Text_sup>
                    <h1>Poundflats Aquário</h1>
                    <div>
                        <img src={Star} alt="Estrela" />
                        <p>4,5</p>
                    </div>
                </Text_sup>
                <Text_inf>
                <div>
                    <p>Santos, SP</p>
                </div>
                <div>
                    <b>Diária:</b>
                    <p>R$97</p>
                </div>
                </Text_inf>
            </Text>
        </Container>
    )
}

export default Alerta