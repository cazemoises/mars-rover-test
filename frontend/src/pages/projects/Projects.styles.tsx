import styled from "styled-components";

export const ProjectsStyles = {

    Container: styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 3rem;
    align-items: center;
    `,

    Title: styled.h1`
    font-size: 2.448rem;
    text-align: center;
    `,

    Button: styled.button`
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

    PlusSpan: styled.span`
    display: inline-flex;
    align-items: center;
    font-size: 1.4rem;
    margin-right: .2rem;
    font-family: "Inter", sans-serif;
    `

}