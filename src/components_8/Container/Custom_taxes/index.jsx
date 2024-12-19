import { StyledWrapper } from "./style"

function Home(){
    return(
        <StyledWrapper>
            <label htmlFor="checkbox">Taxa personalizada</label>
            <div className="checkbox-con">
                <input id="checkbox2" type="checkbox" />
            </div>
        </StyledWrapper>
    )
}

export default Home