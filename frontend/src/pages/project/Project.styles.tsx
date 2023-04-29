import styled from "styled-components";

export const ProjectStyles = {

    Container: styled.div`
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
    `

}