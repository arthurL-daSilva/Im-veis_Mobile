import styled from "styled-components"

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 0;
    width: 345px;
    height: 200px;
    gap: 16px;
    input{
        margin-left: 0;
        width: 345px;
        height: 56px;
        padding-left: 20px;
        padding-top: 12px;
        border-radius: 4px;
        border-color: #00000029;
        background-color: #00000029;
        border-width: 1px;
        outline: none;
        opacity: 50%;
        font-weight: 400;
        font-size: 16px;
        color: #000;
    }
    label{
        position: absolute;
        margin-top: -35px;
        margin-left: 20px;
        opacity: 50%;
        font-size: 12px;
        pointer-events: none;
        transition: 0.2s ease-in-out;
        
    }
    input:focus + label {
        margin-top: -51px;
    }
`