import Status_Bar from "../../components_6/Status_bar"
import Header from "../../components_6/Header"
import Action from "../../components_6/Action"
import Home_Bar from '../../components_6/Home'

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