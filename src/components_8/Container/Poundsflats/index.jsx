import { StyledWrapper } from "./style"

function Home(){
    return(
        <StyledWrapper>
            <label htmlFor="checkbox">Padrão Poundsflats</label>
            <div className="checkbox-con">
                <input id="checkbox" type="checkbox" />
            </div>
        </StyledWrapper>
    )
}

export default Home