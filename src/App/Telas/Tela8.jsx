import Container from '../../components_8/Container'
import Status_bar from "../../components_8/Status_bar"
import Action from '../../components_8/Action'
import Home_bar from '../../components_8/Home'

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