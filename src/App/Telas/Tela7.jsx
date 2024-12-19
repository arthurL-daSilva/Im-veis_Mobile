import Status_Bar from "../../components_7/Status_bar"
import Header from "../../components_7/Header"
import Action from "../../components_7/Action"
import Home_Bar from '../../components_7/Home'

function Home(){
    return(
    <div>
        <Status_Bar />
        <Header />
        <Action />
        <Home_Bar />
    </div>
    )
}

export default Home