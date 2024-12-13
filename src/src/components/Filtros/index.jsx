import { Btn_filtro, Btn_all, Btn_none } from './styles'

function Filtro(){

    return(
        <Btn_filtro>
            <Btn_all>Todos os flats</Btn_all>
            <Btn_none>Indisponíveis</Btn_none>
        </Btn_filtro>
    )
}

export default Filtro