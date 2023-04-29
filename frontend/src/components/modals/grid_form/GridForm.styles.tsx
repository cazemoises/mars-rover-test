import styled from "styled-components";

export const GridFormStyles = {

    Row: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
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

    TitleSubtitleWrapper: styled.div`
    
    `,

    Title: styled.h1`
    font-size: 1.563rem;
    margin: 0;
    `,

    Subtitle: styled.p`
    font-size: 1rem;
    margin: 0;
    `,

    Bold: styled.span`
    font-weight: 700;
    font-size: inherit;
    `,

    Form: styled.form`
    display: flex;
    height: 60%;
    flex-direction: column;
    justify-content: space-evenly;
    `,

    InputWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin: .3rem 0;
    `,

    Label: styled.label`
    font-size: .8rem;
    font-weight: 400;
    margin-bottom: .2rem;
    `,
    
    Input: styled.input`
    border-radius: .5rem;
    border: none;
    background-color: #e7e7e7;
    padding: .8rem;

    body.dark-mode & {
        background-color: #383838;
        color: #fff;
    }

    body.dark-mode &::placeholder {
        color: #a4a4a4;
    }

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    &[type=number] {
    -moz-appearance: textfield;
    }
    `,

    ButtonsWrapper: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 1.5rem;

    & button, & input[type="submit"] {
        padding: 1rem 2rem;
        border-radius: .8rem;
        border: none;
        color: #fff;
        font-famili: "Inter", sans-serif;
        font-weight: 600;
        transition: .2s ease;
    }

    & button:hover, & input[type="submit"]:hover {    
        transform: scale(1.05);
    }
    `,

    CloseButton: styled.button`
    border-radius: 1rem;
    background-color: #cecece;

    body.dark-mode & {
        background-color: #434343;
    }
    `,
    
    Confirm: styled.input`
    background-color: #70D44B;
    body.dark-mode & {
            background-color: #39931d;
        }
    `


}