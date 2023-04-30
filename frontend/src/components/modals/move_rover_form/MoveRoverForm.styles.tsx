import styled from "styled-components";

export const MoveRoverFormStyles = {

    Row: styled.div`
    display: flex;
    height: max-content;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
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

    MoveButton: styled.button`
    padding: 1rem 1.5rem;
    font-size: 1rem;
    background-color: #cecece;
    border: 2px solid #cecece;
    font-weight: 600;
    border-radius: 1rem;
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