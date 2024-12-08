import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    margin-top: 115px;
`

export const Bar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    position: absolute;
    right: 0;
    background-color: #7B2CBF;
    width: 100%;
    height: 80px;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
`

export const Home_bar = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    padding-bottom: 10px;
    position: absolute;
    right: 0;
    width: 100%;
    height: 37px;
    background-color: #7B2CBF;
    margin-top: 79px;

    img{
        width: 134px;
        height: 5px;
    }
`