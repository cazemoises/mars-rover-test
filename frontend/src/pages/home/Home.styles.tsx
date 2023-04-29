import styled from "styled-components";

import { Link } from 'react-router-dom';

export const HomeStyles = {

    Container: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: .3;
    animation: slideIn .5s ease-out forwards;

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            transform: translateY(0px);
            opacity: 1;
        }
    }
    `,

    Title: styled.h1`
    font-size: 2.488rem;
    text-align: center;
    margin: 0;
    `,

    Subtitle: styled.p`
    color: #818181;
    text-align: center;
    `,

    Button: styled(Link)`
    height: 3rem;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2.5rem;
    background-color: #000;
    color: #fff;
    border: 2px solid #000;
    border-radius: 1rem;
    font-weight: 700;
    font-size: 1rem;
    transition: .5s ease;
    &:hover {
        transform: scale(1.05);
    }
    .dark-mode & {
        border: 2px solid #fff;
        color: #fff;
    }
    `,

    Copyright: styled.p`
    position: absolute;
    bottom: .5rem;
    font-weight: 500;
    `

}