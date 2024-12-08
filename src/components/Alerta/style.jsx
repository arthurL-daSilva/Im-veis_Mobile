import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    height: 400px;
    gap: 25px;

    div{
        width: 345px;
    }
    p{
        font-size: 20px;
        text-align: center;
    }
    button{
        width: 345px;
        height: 36px;
        color: #7B2CBF;
        background-color: transparent;
        border-color: #7B2CBF;
        border-radius: 8px;
        border-width: 1px;
        cursor: pointer;
    }
`