import * as S from "./footer_styled";
import logo from "../../assets/images/logo.png";
import googleplay from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";

export default function Footer() {
    return (
        <S.Footer>
            <S.LogoCopy>
                <img src={logo} alt="logo do McDonald's" />
                <p>© McDonald’s 2024</p>
            </S.LogoCopy>

            <S.AppFooter>
                <img src={googleplay} alt="icon Google Play" />
                <img src={appstore} alt="icon App Store" />
            </S.AppFooter>
        </S.Footer>
    );
}
