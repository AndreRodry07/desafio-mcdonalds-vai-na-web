import styled, { css } from "styled-components";
import { maxWidths } from "../MaxWidths/maxWidths";

const center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.footer`
    ${center}
    width: 100%;
    height: 130px;
    gap: 10px;
    flex-direction: column;

    @media (min-width: 550px) {
        height: 80px;
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
    }

    @media (min-width: 1200px) {
        max-width: ${maxWidths.extraExtraLarge};
        padding-inline: 80px;
    }
`;

export const LogoCopy = styled.div`
    ${center}
    flex-direction: column;

    @media (min-width: 550px) {
        gap: 17px;
        flex-direction: row;
    }

    img {
        width: 28px;
        margin: 8px 0 8px 0;

        @media (min-width: 340px) {
            width: 35px;
        }
        @media (min-width: 550px) {
            width: 30px;
        }
    }

    p {
        font-size: 0.8rem;
    }
`;

export const AppFooter = styled.div`
    ${center}
    gap: 30px;
    background-color: #ffffff;

    @media (min-width: 340px) {
        gap: 34px;
    }

    @media (min-width: 550px) {
        justify-content: flex-end;
    }

    img {
        width: 30%;

        @media (min-width: 340px) {
            width: 33%;
        }
    }
`;
