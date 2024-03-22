import styled, { css } from "styled-components";

const center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.article`
    width: 70%;
    border-radius: 20px;
    background-color: #ffffff;

    @media (min-width: 340px) {
        width: 68%;
    }

    @media (min-width: 683px) {
        width: 28%;
    }

    @media (min-width: 768px) {
        width: 28%;
    }

    @media (min-width: 1200px) {
        width: 30%;
    }
`;

export const FigureCard = styled.figure`
    overflow: hidden;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;

    img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: contain;
        transition: transform 0.3s ease;
    }

    &:hover img {
        transform: scale(1.1);
    }
`;

export const CustomDiv = styled.div`
    ${center}
    flex-direction: column;
    padding-block: 10px 20px;

    h3 {
        width: 186px;
        font-size: 0.8rem;
        text-align: center;
        padding: 7px 9px 17px 7px;

        @media (min-width: 340px) {
            width: 210px;
            font-size: 0.9rem;
            padding: 10px 10px 20px 10px;
        }

        @media (min-width: 683px) {
            width: 170px;
            font-size: 0.8rem;
            padding: 6px 6px 15px 6px;
        }
        @media (min-width: 768px) {
            width: 200px;
            height: 50px;
            font-size: 0.9rem;
            padding: 6px 4px 15px 4px;
        }
    }

    button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 0.8rem;
        padding: 3% 10%;
        color: #000000;
        border: none;
        cursor: pointer;
        border-radius: 12px;
        background-color: #ffbc0d;
    }
`;
