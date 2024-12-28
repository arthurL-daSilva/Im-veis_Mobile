import { Container, Itens_com } from "./style"

function Home(){
    return(
        <Container>
            <p>Comodidades</p>
            <Itens_com>
                <div>Internet</div>
                <div>TV a cabo</div>
                <div>Televisão</div>
                <div>Ar condicionado</div>
            </Itens_com>
        </Container>
    )
}

export default Home