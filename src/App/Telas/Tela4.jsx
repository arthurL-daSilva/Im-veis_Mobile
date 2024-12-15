import Status_Bar from "../../components_4/Status_bar"
import Header from "../../components_4/Header"
import Form_com from "../../components_4/Form_com"
import Pform from "../../components_4/P_perm"
import Form_perm from "../../components_4/Form_perm"
import Action from "../../components_4/Action"
import Home_Bar from '../../components_4/Home'

function Home(){
    return(
        <div>
            <Status_Bar />
            <Header />
            <Form_com />
            <Pform />
            <Form_perm />
            <Action />
            <Home_Bar />
        </div>
    )
}

export default Home