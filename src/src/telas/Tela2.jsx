import Status_Bar from '../components_2/Status_bar'
import Header from '../components_2/Header'
import Form from '../components_2/form'
import Action from '../components_2/Action'
import Home_Bar from '../components_2/Home'
import './index.css'

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