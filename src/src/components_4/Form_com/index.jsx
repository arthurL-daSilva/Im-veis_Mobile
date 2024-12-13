import { Comodidades } from './style'

function Form(){

    return(
        <Comodidades>
            <div>
                <label htmlFor="checkbox">Internet</label>
                <input type="checkbox" />
            </div>
            <div>
                <label htmlFor="checkbox">Ar-condicionado</label>
                <input type="checkbox" />
            </div>
            <div>
                <label htmlFor="checkbox">Televisão</label>
                <input type="checkbox" />
            </div>
            <div>
                <label htmlFor="checkbox">TV a cabo</label>
                <input type="checkbox" />
            </div>
        </Comodidades>
    )
}

export default Form