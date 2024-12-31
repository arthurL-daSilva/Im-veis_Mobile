import styled from 'styled-components'

export const Top = styled.div`
    margin-top: 40px;
`

export const Cabeçalho = styled.div`
    display: flex;
    align-items: center;
    color: #7B2CBF;
    font-weight: 700;
    justify-content: space-between;
    padding-bottom: 30px;
`

export const Img_voltar = styled.img`
    object-fit: cover;
    margin-left: 22px;
    width: 32px;
    height: 32px;
`

export const Cadastrar = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    color: #7B2CBF;
    font-weight: 700;
    cursor: pointer;

    a{
        display: flex;
        align-items: center;
        text-decoration: none;
        color: inherit;
    }
    span{
        font-size: 16px;
    }
`