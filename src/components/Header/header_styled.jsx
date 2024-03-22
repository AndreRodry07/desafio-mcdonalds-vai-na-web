import styled, { createGlobalStyle, css } from "styled-components";
import { maxWidths } from "../MaxWidths/maxWidths";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
} 
`;

const center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.header`
    ${center}
    width: 100%;
    flex-direction: column;
    padding-block: 13px;

    @media (min-width: 550px) {
        max-width: ${maxWidths.medium};
        margin-inline: auto;
        padding-inline: 30px;
        flex-direction: row;
        justify-content: space-between;
    }

    @media (min-width: 768px) {
        max-width: ${maxWidths.extraLarge};
    }

    @media (min-width: 992px) {
        max-width: ${maxWidths.custom};
        padding-inline: 15px;
    }

    @media (min-width: 1200px) {
        max-width: ${maxWidths.extraExtraLarge};
        padding-inline: 50px;
    }

    img {
        width: 40px;
    }
`;

export const AppContainer = styled.div`
    ${center}
    gap: 27px;
    margin-top: 10px;

    @media (min-width: 340px) {
        gap: 30px;
    }
`;

export const FigureApp1 = styled.figure`
    ${center}
    cursor: pointer;

    img {
        width: 15%;
        margin-right: 6px;

        @media (min-width: 340px) {
            width: 17%;
        }
    }

    figcaption {
        font-size: 0.6rem;

        @media (min-width: 340px) {
            font-size: 0.7rem;
        }

        @media (min-width: 683px) {
            font-size: 0.8rem;
        }
    }
`;

export const FigureApp2 = styled.figure`
    ${center}
    background-color: #FFC72C;
    padding: 2px 4px;
    border-radius: 10px;
    cursor: pointer;

    @media (min-width: 340px) {
        padding: 4px 10px;
    }

    @media (min-width: 683px) {
        padding: 4px 14px;
    }

    img {
        order: 2;
        width: 15%;
        margin-left: 5px;
        position: relative;
        top: 2%;
        
        @media (min-width: 340px) {
            width: 16%;
        }
    }

    figcaption {
        order: 1;
        font-size: 0.6rem;

        @media (min-width: 340px) {
            font-size: 0.7rem;
        }

        @media (min-width: 683px) {
            font-size: 0.8rem;
        }
    }
`;
