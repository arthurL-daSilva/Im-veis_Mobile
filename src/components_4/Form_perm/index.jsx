import { Permissoes, StyledWrapper } from './style'

function Form_perm(){
    return(
        <Permissoes>
            <StyledWrapper>
                <label htmlFor="checkbox_2">Internet</label>
                <div className="checkbox_2-con">
                    <input id="checkbox_2" type="checkbox" />
                </div>
            </StyledWrapper>
            <StyledWrapper>
                <label htmlFor="checkbox_2">Ar-condicionado</label>
                <div className="checkbox_2-con">
                    <input id="checkbox_2" type="checkbox" />
                </div>
            </StyledWrapper>
            <StyledWrapper>
                <label htmlFor="checkbox_2">Televisão</label>
                <div className="checkbox_2-con">
                    <input id="checkbox_2" type="checkbox" />
                </div>
            </StyledWrapper>
            <StyledWrapper>
                <label htmlFor="checkbox_2">TV a cabo</label>
                <div className="checkbox_2-con">
                    <input id="checkbox_2" type="checkbox" />
                </div>
            </StyledWrapper>            
        </Permissoes>
    )
}

export default Form_perm