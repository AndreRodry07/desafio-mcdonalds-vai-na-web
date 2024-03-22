import * as S from "./cards_styled";
import PropTypes from "prop-types";

export default function Cards({ imagem, texto, altTexto }) {
    return (
        <>
            <S.Card>
                <S.FigureCard>
                    <img src={imagem}  alt={altTexto} />
                </S.FigureCard>

                <S.CustomDiv>
                    <h3>{texto}</h3>
                    <button>Clique aqui</button>
                </S.CustomDiv>
            </S.Card>
        </>
    );
}

Cards.propTypes = {
    imagem: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    altTexto: PropTypes.string.isRequired
};
