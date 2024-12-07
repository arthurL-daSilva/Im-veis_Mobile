import Header from '../components/Header'
import Filtros from '../components/Filtros'
import Alerta from '../components/Alerta'
import Status_Bar from '../components/Status_bar'
import Menu from '../components/Menu'

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

