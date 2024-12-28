import Status_bar from "../../components_9/Status_bar"
import Container from "../../components_9/Container"
import Action from "../../components_9/Action"
import Home_bar from "../../components_9/Home"

function Home(){
    return(
        <div>
            <Status_bar />
            <Container />
            <Action />
            <Home_bar />
        </div>
    )
}

export default Home