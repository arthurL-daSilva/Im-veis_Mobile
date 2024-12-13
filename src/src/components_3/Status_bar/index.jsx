import { Elements_bar } from './style'
import battery from '../../images/Battery.png'
import wifi from '../../images/Wifi.png'
import cell from '../../images/Mobile Signal.png'

function Status_Bar(){

    return(
        <Elements_bar>
            5:13
            <div>
                <img src={cell} alt="4g" />
                <img src={wifi} alt="wifi" />
                <img src={battery} alt="bateria" />
            </div>
        </Elements_bar>
    )
}

export default Status_Bar