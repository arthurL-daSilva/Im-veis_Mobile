import { Formulario } from "./style"

function Home(){
    return(
        <Formulario>
            <input type="text" placeholder="Tipo de imóvel"/>
            <input type="text" placeholder="Quartos"/>
            <input type="text" placeholder="Banheiros"/>
        </Formulario>
    )
}

export default Home