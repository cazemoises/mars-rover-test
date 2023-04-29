import styled from "styled-components";

import { Link } from 'react-router-dom';

export const ProjectsListStyles = {

    Container: styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr) ) ;
    align-items: flex-start;
    width: 50vw;
    min-height: 20rem;
    max-height: 60vh;
    gap: 1rem;
    overflow-y: scroll;
    padding: .5rem;
    border-radius: 1rem;

    /* Define a cor do ícone do scrollbar */
    ::-webkit-scrollbar-thumb {
      background-color: #bbb;
    }

    /* Define o fundo transparente do scrollbar */
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    `,

    Project: styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    border-radius: .5rem;
    transition: box-shadow .1s ease-in-out;
    padding: .5rem 1rem;
    height: max-content;
    min-height: 3.5rem;
    min-width: 3.5rem;
    color: #000;
    text-decoration: none;
    transition: .4s ease;
    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, .3);
    }

    .dark-mode &:hover {
        transform: scale(1.1);
    }
    `,

    ProjectName: styled.p`
    text-align: center;
    font-weight: 600;
    `

}
