import { Container, Bar, Home_bar } from './style'
import icon from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import icon4 from '../../images/icon4.png'
import indicator from '../../images/indicator_bar.png'

function Menu(){

    return(
        <Container>
            <Bar>
                <img src={icon} alt="botao1" />
                <img src={icon2} alt="botao2" />
                <img src={icon3} alt="botao3" />
                <img src={icon4} alt="botao4" />
            </Bar>
            <Home_bar>
                <img src={indicator} alt="barra indicadora" />
            </Home_bar>
        </Container>
    )
}

export default Menu