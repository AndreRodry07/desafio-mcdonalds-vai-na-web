import logo from "../../assets/images/logo.png";
import app1 from "../../assets/images/app1.svg";
import app2 from "../../assets/images/app2.svg";
import * as S from "./header_styled";

export default function Header() {
    return (
        <>
            <S.Header>
                <img src={logo} alt="logo do McDonald's" />

                <S.AppContainer>
                    <S.FigureApp1>
                        <img src={app1} alt="Imagem de um celular com um tom de amarelo vibrante." />
                        <figcaption>Baixe seu App</figcaption>
                    </S.FigureApp1>

                    <S.FigureApp2>
                        <img src={app2} alt="Celular exibindo fotos de comida na tela" />
                        <figcaption>Peça seu Méqui</figcaption>
                    </S.FigureApp2>
                </S.AppContainer>
            </S.Header>
        </>
    );
}
