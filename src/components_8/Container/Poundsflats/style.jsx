import styled from "styled-components"

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 345px;
    height: 20px;

    .checkbox-con input{
    appearance: none;
    width: 34px;
    height: 18px;
    border: 1px solid #00000029;
    border-radius: 16px;
    background: transparent;
    position: relative;
    box-sizing: border-box;
    }

    .checkbox-con input::before {
    content: "";
    width: 10px;
    height: 10px;
    background: #7B2CBF;
    border: none;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
    transition: all 0.3s ease;
    }

    .checkbox-con input:checked {
    border: none;
    background: #7B2CBF;
    }

    .checkbox-con input:checked::before {
    background: #fff;
    transform: translate(17px, 1px);
    transition: all 0.3s ease;
    }
`