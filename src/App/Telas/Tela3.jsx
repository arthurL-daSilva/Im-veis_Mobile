import Status_Bar from "../../components_3/Status_bar"
import Header from "../../components_3/Header"
import Form from '../../components_3/form'
import Action from "../../components_3/Action"
import Home_Bar from '../../components_3/Home'

function Home(){
    return(
        <div>
            <Status_Bar />
            <Header />
            <Form />
            <Action />
            <Home_Bar />
        </div>
    )
}

export default Home