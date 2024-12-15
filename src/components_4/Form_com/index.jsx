import { Comodidades, StyledWrapper } from './style'

function Form(){

    return(
        <Comodidades>
            <StyledWrapper>
                <label htmlFor="checkbox">Internet</label>
                <div className="checkbox-con">
                    <input id="checkbox" type="checkbox" />
                </div>
            </StyledWrapper>
            <StyledWrapper>
                <label htmlFor="checkbox">Ar-condicionado</label>
                <div className="checkbox-con">
                    <input id="checkbox" type="checkbox" />
                </div>
            </StyledWrapper>
            <StyledWrapper>
                <label htmlFor="checkbox">Televisão</label>
                <div className="checkbox-con">
                    <input id="checkbox" type="checkbox" />
                </div>
            </StyledWrapper>
            <StyledWrapper>
                <label htmlFor="checkbox">TV a cabo</label>
                <div className="checkbox-con">
                    <input id="checkbox" type="checkbox" />
                </div>
            </StyledWrapper>
        </Comodidades>
    )
}

export default Form