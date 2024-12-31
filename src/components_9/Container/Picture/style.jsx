import styled from "styled-components"

export const Pic = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    img{
        width: 345px;
        height: 250px;
        border-radius: 24px;
        margin-left: 0;
    }
    h1{
        width: 345px;
        height: 28px;
        font-size: 19.3px;
        font-weight: 700; 
    }
    button{
        width: 345px;
        height: 36px;
        color: #fff;
        margin-left: 0;
        background-color: #7B2CBF;
        border-radius: 8px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            margin-bottom: 2px;
            width: 20px;
            height: 16px;
        }
        h2{
            font-size: 12px;
            font-weight: 500;
            padding-bottom: 3px;
        }
    }
`

export const Local_Dia = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 400;
`

export const Room_text = styled.div`
    width: 345px;
    height: 116px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    p{
       height: 56px;
       font-weight: 700;
       font-size: 15.5px; 
       color: #00000029;
    }
`