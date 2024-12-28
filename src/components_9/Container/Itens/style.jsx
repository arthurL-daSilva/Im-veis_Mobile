import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 345px;
    height: 224px;
    p{
        font-weight: 700;
        font-size: 20px;
    }
`

export const Num_itens = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;
    div{
        font-size: 12px;
        font-weight: 400;
        display: flex;
        align-items: center;
        height: 24px;
        padding: 4px 12px;
        border-radius: 8px;
        border: 1px solid #00000029;
        background-color: transparent;
    }
`