import styled from "styled-components"

export const Formulario = styled.form`
    display: flex;
    //justify-content: center;
    flex-direction: column;
    width: 345px;
    height: 524px;
    margin-top: 20px;
 
    input{
        padding-left: 12px;
        font-size: 16px;
        border-radius: 4px;
        border-width: 1px;
        border-color: #00000029;
        outline: none;
    }
    p{
        margin-top: 10px;
        font-size: 12px;
        width: 345px;
        height: 32px;
    }

    div{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        margin-top: 15px;
        gap: 4px;
        margin-left: 0;
        width: 345px;
        height: 60px;
        overflow: visible;
    }

    select{
        width: 113px;
        height: 56px;
        border-width: 1px;
        padding-left: 10px;
        outline: none;
        border-radius: 4px;
        border-color: #00000029;
        font-weight: 100;
        font-size: 16px;
        margin-right: -6px;
    }
`

export const Name = styled.input`
    width: 345px;
    height: 56px;
`

export const Addr = styled.input`
    margin-top: 15px;
    width: 345px;
    height: 56px;
`

export const Description = styled.textarea`
    margin-top: 10px;
    width: 345px;
    height: 104px;
    padding: 13px;
    border-radius: 4px;
    border-width: 1px;
    border-color: #00000029;
    resize: none;
    outline: none;
`

export const Max_Len = styled.p`
    margin-left: 280px;
`

export const Num = styled.input`
    width: 164.5px;
    height: 56px;
`

export const Comp = styled.input`
    width: 164.5px;
    height: 56px;
`

export const City = styled.input`
    width: 216px;
    height: 56px;
`

export const City_UF = styled.div`
    display: flex;
    margin: 0;
    justify-content: space-between;
    width: 345px;
`

export const Teste = styled.input`
    width: 216px;
    height: 56px;
`

export const Teste2 = styled.input`
    width: 113px;
    height: 56px;
    display: none;
`