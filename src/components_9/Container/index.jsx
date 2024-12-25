import { Container } from "./style"
import Header from "./Header"
import Room_Desc from "./Picture"
import Details from "./Details"

function Home(){
    return(
        <Container>
            <Header />
            <Room_Desc />
            <Details />
        </Container>
    )
}

export default Home