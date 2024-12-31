import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 345px;
    height: 306px;
    gap: 25px;
    margin-left: 10px;
    margin-top: 16px;

    img{
        width: 345px;
        height: 250px;
        border-radius: 24px;
    }
`

export const Text = styled.div`
    height: 40px;
    width: 345px;
    display: flex;
    flex-direction: column;
`

export const Text_sup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 20px;
    width: 345px;
    div{
        display: flex;
        flex-direction: row;
    }
    h1{
        font-size: 700;
        font-size: 16px;
        
    }
    img{
        margin-right: 0;
        margin-top: 2px;
        width: 16px;
        height: 16px;
    }
    p{
        font-size: 16px;
        font-weight: 400;
    }
`

export const Text_inf = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 20px;
    width: 345px;
    font-size: 12px;
    font-weight: 400;
    div{
        display: flex;
        flex-direction: row;
    }
`