import { FC } from "react";
import { HeroContainer, HeroSubtitle, HeroText, HeroTextContainer, HeroTitle } from "../Hero/Hero.styles";
import Image from "../../assets/HeroImage.jpeg";

export const Hero: FC = () => {
    return (
        <>
            <HeroContainer>
                <img width="100%" src={Image} alt="Man eating sandwich" />
                <HeroTextContainer>
                    <HeroTitle>#costoflivingcrisis</HeroTitle>
                    <HeroSubtitle>The cost of living crisis</HeroSubtitle>
                    <p></p>
                    <HeroText>The government must urgently act to ensure nobody is priced out and forgotten.</HeroText>
                </HeroTextContainer>
            </HeroContainer>
        </>
    );
}