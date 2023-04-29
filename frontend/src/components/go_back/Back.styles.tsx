import styled from "styled-components";

const BackStyles = {

    Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: absolute;
    top: 1rem;
    left: 2rem;
    background-color: #fff;
    width: 1.3rem;
    height: 1rem;
    & img {
        -user-select: none;
    }
    `,
    
    Img: styled.img`
    width: 32px;
    `

}

export default BackStyles;