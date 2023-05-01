import styled from "styled-components";

export const DarkModeStyles = {

    Switch: styled.label`
    display: block;
    position: absolute;
    right: 2rem;
    bottom: 1rem;
    --width-of-switch: 3.5em;
    --height-of-switch: 2em;
    --size-of-icon: 1.4em;
    --slider-offset: .3em;
    width: var(--width-of-switch);
    height: var(--height-of-switch);
    `,

    Input: styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + span {
        background-color: #303136;
    }

    &:checked + span:before {
        left: calc(100% - (var(--size-of-icon, 1.4em) + var(--slider-offset, .3em)));
        background: #303136;
        box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
    }

    &:checked ~ body {
        background-color: #303136 !important;
        color: #fff;
    }
    `,

    Span: styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fdb813;
    transition: .4s ease;
    border-radius: 4rem;
    
    &:before {
        position: absolute;
        content: "";
        height: var(--size-of-icon, 1.4em);
        width: var(--size-of-icon, 1.4em);
        border-radius: 3rem;
        left: var(--slider-offset, .3em);
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50px;
        background: linear-gradient(225deg, #fff, #f79b09);
        transition: .4s ease;   
    }
    `

}