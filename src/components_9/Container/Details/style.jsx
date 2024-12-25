import styled from "styled-components"

export const Boxes = styled.div`
    height: 240px;
    width: 345px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    div{
        padding-top: 24px;
        text-align: start;
        width: 103px;
        height: 112px;
        border-radius: 8px;
        color: #00000029;
        border-color: #0000003D;
        border: 1px solid;
        background-color: transparent;
        p{
            font-size: 16px;
            font-weight: 700;
            width: 87px;
            height: 40px;
        }
    }
`