import { maxWidths } from "../MaxWidths/maxWidths";
import styled, { css } from "styled-components";

const center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FoodSection = styled.section`
    ${center}
    padding-block: 100px;
    flex-direction: column;
    background-color: #ffc72c;
`;

export const MealDescription = styled.div`
    ${center}
    width: 100%; 
    flex-direction: column;

    @media (min-width: 340px) {
        max-width: ${maxWidths.small};
    }

    @media (min-width: 550px) {
       max-width: ${maxWidths.medium};
        
    }

    @media (min-width: 768px) {
        max-width: ${maxWidths.extraLarge};
        flex-direction: row;
       
    }

    @media (min-width: 992px) {
        max-width: ${maxWidths.custom};
        
    }

    @media (min-width: 1200px) {
        max-width: ${maxWidths.extraExtraLarge};
    }

    h1 {
        width: 249px;
        color: #ffffff;
        font-size: 1.4rem;
        letter-spacing: 1px;
        margin-inline: auto;
        text-align: center;
        text-transform: uppercase;
        padding: 35px 6px;

        @media (min-width: 340px) {
            width: 90%;
            font-size: 1.8rem;
            margin-top: 5px;
        }

        @media (min-width: 550px) {
            width: 70%;
            font-size: 2.1rem;
        }

        @media (min-width: 768px) {
            width: 400px;
            padding: 0;
            text-align: start;
            margin-left: 52px;
            font-size: 2.2rem;
        }

        @media (min-width: 992px) {
            width: 450px;
            font-size: 2.7rem;
        }

        @media (min-width: 1200px) {
            width: 470px;
            font-size: 3rem;
            margin-right: 98px;
        }
    }

    span {
        color: #db0007;
    }
`;

export const SelectedImage = styled.figure`
    width: 95%;
    margin-inline: auto;

    @media (min-width: 340px) {
        width: 90%;
    }

    @media (min-width: 550px) {
        width: 65%;
    }

    @media (min-width: 768px) {
        width: 43%;
        margin-left: 20px;
    }

    @media (min-width: 992px) {
        width: 42%;
    }

    @media (min-width: 1200px) {
        width: 39%;
    }

    img {
        width: 100%;
    }
`;

export const FoodOptions = styled.div`
    ${center}
    gap: 20px;
    margin-top: 9px;

    img {
        width: 50px;

        @media (min-width: 340px) {
            margin-top: 10px;
        }

        @media (min-width: 550px) {
            width: 60px;
            margin-top: 28px;
        }

        @media (min-width: 768px) {
            width: 8%;
            margin-top: 70px;
        }

        @media (min-width: 992px) {
            width: 6%;
            margin-top: 40px;
        }

        @media (min-width: 1200px) {
            width: 6%;
            margin-top: 40px;
        }
    }
`;

export const Promocao = styled.section`
    padding-block: 100px;
    background-color: #ffbc0d;

    h2 {
        font-size: 1.5rem;
        letter-spacing: 1px;
        text-align: center;
        color: #ffffff;
        padding-block: 0 30px;

        @media (min-width: 340px) {
            font-size: 1.6rem;
        }

        @media (min-width: 683px) {
            font-size: 1.8rem;
        }
    }
`;

export const CardsBox = styled.div`
    ${center}
    width: 100%;
    gap: 25px;
    flex-direction: column;

    @media (min-width: 340px) {
        max-width: ${maxWidths.small};
        margin-inline: auto;
    }

    @media (min-width: 683px) {
        max-width: ${maxWidths.large};
        flex-direction: row;
    }

    @media (min-width: 768px) {
        gap: 20px;
        max-width: ${maxWidths.extraLarge};
    }

    @media (min-width: 992px) {
        gap: 30px;
        max-width: ${maxWidths.custom};
    }

    @media (min-width: 1200px) {
        gap: 45px;
    }
`;
