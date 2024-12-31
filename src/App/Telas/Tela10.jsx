import Status_Bar from "../../components_10/Status_bar"
import Header from "../../components_10/Header"
import Action from "../../components_10/Action"
import Home_bar from "../../components_10/Home"

function Home(){
    return(
        <div>
            <Status_Bar />
            <Header />
            <Action />
            <Home_bar />
        </div>
    )
}

export default Home