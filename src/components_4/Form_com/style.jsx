import styled from "styled-components"

export const Comodidades = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 24px;
    margin-left: 10px;
    width: 345px;
    height: 152px;
    gap: 16px;
`

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 345px;
    height: 20px;

    .checkbox-con input[type="checkbox"] {
    appearance: none;
    width: 34px;
    height: 18px;
    border: 1px solid #00000029;
    border-radius: 16px;
    background: transparent;
    position: relative;
    box-sizing: border-box;
    }

    .checkbox-con input[type="checkbox"]::before {
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

    .checkbox-con input[type="checkbox"]:checked {
    border: none;
    background: #7B2CBF;
    }

    .checkbox-con input[type="checkbox"]:checked::before {
    background: #fff;
    transform: translate(17px, 1px);
    transition: all 0.3s ease;
    }
`