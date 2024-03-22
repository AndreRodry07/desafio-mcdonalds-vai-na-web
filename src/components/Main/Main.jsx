import { useState } from "react";
import * as S from "./main_styled";
import Cards from "../Cards/Cards";
import bigmac from "../../assets/images/bigmac.png";
import batata from "../../assets/images/batata.png";
import sorvete from "../../assets/images/sorvete.png";
import sofa from "../../assets/images/sofa.png";
import loja from "../../assets/images/loja.png";
import info_mequi from "../../assets/images/info_mequi.png";

export default function Main() {
    const [imagemSelecionada, setImagemSelecionada] = useState(bigmac);

    const handleImagem1 = () => {
        setImagemSelecionada(bigmac);
    };

    const handleImagem2 = () => {
        setImagemSelecionada(batata);
    };

    const handleImagem3 = () => {
        setImagemSelecionada(sorvete);
    };

    return (
        <main>
            <S.FoodSection>
                <S.MealDescription>
                    <S.SelectedImage>
                        <img src={imagemSelecionada} alt="Sanduíche Big Mac" />
                    </S.SelectedImage>
                    <h1>
                        Bateu aquela <span>#fome</span> de <span>méqui</span>?
                    </h1>
                </S.MealDescription>

                <S.FoodOptions>
                    <img src={bigmac} alt="Sanduíche Big Mac" onClick={handleImagem1} />
                    <img src={batata} alt="Batatas fritas" onClick={handleImagem2} />
                    <img src={sorvete} alt="Taça de sorvete" onClick={handleImagem3} />
                </S.FoodOptions>
            </S.FoodSection>

            <S.Promocao>
                <h2>Promoção</h2>
                <S.CardsBox>
                    <Cards imagem={sofa} texto={"Que tal um #MéquiNoSofá?"} altTexto={"Imagem de um sofá"} />
                    <Cards imagem={loja} texto={"Venha conhecer nossa nova loja"} altTexto={"Imagem de uma loja"} />
                    <Cards imagem={info_mequi} texto={"Confira as medidas que o Méqui adotou!"} altTexto={"Imagem com informações do Méqui"} />
                </S.CardsBox>
            </S.Promocao>
        </main>
    );
}
