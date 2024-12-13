import { Permissoes } from './style'

function Form_perm(){
    return(
        <Permissoes>
                    <div>
                        <label htmlFor="checkbox">Casais</label>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <label htmlFor="checkbox">Crianças</label>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <label htmlFor="checkbox">Fumantes</label>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <label htmlFor="checkbox">Pets</label>
                        <input type="checkbox" />
                    </div>
                </Permissoes>
    )
}

export default Form_perm