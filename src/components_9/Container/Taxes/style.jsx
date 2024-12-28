import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    h1{
      font-weight: 700;
      font-size: 20px;  
    }
    h2{
        font-weight: 400;
        font-size: 12px;
        color: #0000005C;
        padding-left: 32px;
    }
    div{
        display: flex;
        flex-wrap: wrap;
    }
    p{
        font-weight: 400;
        font-size: 16px;
        width: 250px;
    }
    img{
        width: 20px;
        height: 20px;
    }
`