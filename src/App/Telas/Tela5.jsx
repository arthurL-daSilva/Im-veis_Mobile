import Status_Bar from "../../components_5/Status_bar"
import Header from "../../components_5/Header"
import Action from "../../components_5/Action"
import Home_Bar from '../../components_5/Home'

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