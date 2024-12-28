import { Formulario } from "./style"

function Home(){
    return(
        <Formulario>
            <div>
                <input type="text"/>
                <label htmlFor="name">Tipo de imóvel</label>
            </div>
            <div>
                <input type="text"/>
                <label htmlFor="name">Quartos</label>
            </div>
            <div>
                <input type="text"/>
                <label htmlFor="name">Banheiros</label>
            </div>
        </Formulario>
    )
}

export default Home