import { Container } from "./style"
import Taxes1 from "../../../images/Penality.png"
import Taxes2 from "../../../images/Clean_Taxes.png"
import Taxes3 from "../../../images/Dolar.png"


function Home(){
    return(
        <Container>
            <h1>Taxas/multas</h1>
            <div>
                <img src={Taxes2} alt="Taxa de limpeza" />
                <p>Taxa de limpeza</p>
                <h2>R$ 50,00</h2>
            </div>
            <div>
                <img src={Taxes1} alt="Multa sobre avarias" />
                <p>Multa sobre avarias</p>
                <h2>R$ 150,00</h2>
            </div>
            <div>
                <img src={Taxes3} alt="Taxa personalizada" />
                <p>Taxa personalizada</p>
                <h2>R$ 300,00</h2>
            </div>
        </Container>
    )
}

export default Home