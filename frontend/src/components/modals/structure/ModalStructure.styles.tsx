import styled from "styled-components";

export const ModalStructureStyles = {

    Overlay: styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    backdrop-filter: blur(.5rem);
    left: 0;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `,

    
    Container: styled.div`
    width: 50vw;
    min-width: fit-content;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 2rem;
    padding: 1.5rem 3rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    background-color: #fff;

    body.dark-mode & {
        background-color: #000;
        box-shadow: rgba(255, 255, 255, 0.25) 0px 0.0625em 0.0625em, rgba(255, 255, 255, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

    }
    `,

}