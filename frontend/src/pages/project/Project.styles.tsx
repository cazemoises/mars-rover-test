import styled from "styled-components";

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
    `

}