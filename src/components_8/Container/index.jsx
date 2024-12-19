import Header from "../../components_8/Container/Header"
import Vl_day from "../../components_8/Container/Vl_day"
import Taxes from "../../components_8/Container/Taxes"
import Poundsflats from "../../components_8/Container/Poundsflats"
import Custom_taxes from "../../components_8/Container/Custom_taxes"
import { Container } from "./style"

function Home(){
    return(
        <Container>
            <Header />
            <Vl_day />
            <Taxes />
            <Poundsflats />
            <Custom_taxes />
        </Container>
    )
}

export default Home