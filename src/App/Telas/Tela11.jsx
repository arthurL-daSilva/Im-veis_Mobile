import Header from '../../components_11/Header'
import Filtros from '../../components_11/Filtros'
import Alerta from '../../components_11/Alerta'
import Status_Bar from '../../components_11/Status_bar'
import Menu from '../../components_11/Menu'
import '../index.css'

function Home(){

    return(
        <div>
            <Status_Bar />
            <Header />
            <Filtros />
            <Alerta />
            <Menu />
        </div>
    )
}

export default Home