import { Container } from "./style"
import Header from "./Header"
import Room_Desc from "./Picture"
import Details from "./Details"
import Guest from "./Guest"
import Form from "./Form"
import Itens from "./Itens"

function Home(){
    return(
        <Container>
            <Header />
            <Room_Desc />
            <Details />
            <Guest />
            <Form />
            <Itens />
        </Container>
    )
}

export default Home