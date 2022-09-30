import { FC } from "react";
import { Logo } from "../../assets/Logo";
import { OnlineCommunity } from "../../assets/OnlineCommunity";
import { SearchIcon } from "../../assets/SearchIcon";
import { Hero } from "../Hero/Hero";
import { Aligner, DonateButton, DonateButtonText, HeaderContainer, HeaderEndContainer, HeaderNavMenu, HeaderNavMenuItem, NavMenuInnerContainer, OnlineCommunityContainer, OnlineCommunityText, SearchContainer } from "./Header.styles";

export const Header: FC = () => {
    return (
        <>
            <HeaderContainer>
                <Aligner>
                    <Logo />
                    <HeaderEndContainer>
                        <DonateButton>
                            <DonateButtonText>Donate</DonateButtonText>
                        </DonateButton>
                        <OnlineCommunityContainer>
                            <OnlineCommunity />
                            <OnlineCommunityText>
                                Online Community
                            </OnlineCommunityText>
                        </OnlineCommunityContainer>
                    </HeaderEndContainer>
                </Aligner>
            </HeaderContainer>
            <HeaderNavMenu>
                <NavMenuInnerContainer>
                    <HeaderNavMenuItem>Advice and support</HeaderNavMenuItem>
                    <HeaderNavMenuItem>Learning disability explained</HeaderNavMenuItem>
                    <HeaderNavMenuItem>Get involved</HeaderNavMenuItem>
                    <HeaderNavMenuItem>About us</HeaderNavMenuItem>
                    <HeaderNavMenuItem>Cost of living</HeaderNavMenuItem>
                    <SearchContainer>
                        <HeaderNavMenuItem>Search...</HeaderNavMenuItem>
                        <SearchIcon />
                    </SearchContainer>
                </NavMenuInnerContainer>
            </HeaderNavMenu>
            <Hero />
        </>
    );
};
