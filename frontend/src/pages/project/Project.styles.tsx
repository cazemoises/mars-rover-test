import styled, { keyframes } from "styled-components";


const SlideInAnimation = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`


export const ProjectStyles = {

    Container: styled.div`
    box-sizing: border-box;
    padding: 0 0 2rem 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    `,


    Sidebar: styled.nav`
    box-sizing: border-box;
    padding-left: 2rem;
    width: 25vw;
    height: 100%;
    background-color: #000;
    color: #fff;

    .dark-mode & {
        border-right: 2px solid #fff;
    }
    `,

    Title: styled.h1`
    `,

    LandRoverButton: styled.button`
    box-sizing: border-box;
    padding: 1rem;
    background-color: #000;
    color: #fff;
    border: 2px solid #000;
    border-radius: .8rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 600;  
    transition: .2s ease;
    font-size: 1rem;
    font-family: "Inter", sans-serif;

    &:hover {
        background-color: #fff;
        color: #000;
    }

    body.dark-mode & {
        border: 2px solid #fff;
    }
    `,

    InfoContainer: styled.div`
    position: absolute;
    top: 1rem;
    right: 2rem;
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    `,

    Info: styled.span`
    font-size: 2rem;
    cursor: pointer;
    display: inline-flex;
    flex-direction: column;
    align-items: center;

    &:before {
        font-size: .8rem;
        content: "hover me";
    }

    &:hover ~ div {
        animation: ${SlideInAnimation} 0.5s ease forwards;
    }
    `,

    InfoCard: styled.div`
    opacity: 0;
    `,

    Ul: styled.ul`
    `,

    Li: styled.li`
    `

}