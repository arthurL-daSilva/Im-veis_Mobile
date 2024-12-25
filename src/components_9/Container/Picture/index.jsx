import { Pic, Local_Dia, Room_text } from "./style"
import Room from "../../../images/Pic_room.png"
import Grav from "../../../images/Grav2.png"
function Home(){
    return(
        <Pic>
            <img src={Room} alt="Quarto" />
            <Room_text>
                <h1>Poundsflats Unidade Aquário 065</h1>
                <Local_Dia>
                    <h3>Santos, SP</h3>
                    <h3>Diária: R$97</h3>
                </Local_Dia>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.</p>
           </Room_text>
           <button>
                <img src={Grav} alt="Cam" />
                <h2>Vídeo Visita</h2>
           </button>
        </Pic>
    )
}

export default Home