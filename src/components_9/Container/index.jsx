import { Container } from "./style"
import Header from "./Header"
import Room_Desc from "./Picture"
import Details from "./Details"
import Guest from "./Guest"
import Form from "./Form"
import Itens from "./Itens"
import Comodidades from "./Comodidades"
import Permisions from "./Permisions"
import Taxes from "./Taxes"
 
function Home(){
    return(
        <Container>
            <Header />
            <Room_Desc />
            <Details />
            <Guest />
            <Form />
            <Itens />
            <Comodidades />
            <Permisions />
            <Taxes />
        </Container>
    )
}

export default Home