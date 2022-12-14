import styled from "@emotion/styled";

const breakpoints = [576, 768, 992, 1200, 1400];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const HeaderContainer = styled("div")`
  background-color: #970361;
  display: flex;
  padding: 28px 0px;
  font-family: "Arial", sans-serif;
}
`;

export const Aligner = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 15%;
  ${mq[0]} {
    padding: 0 20px;
  }
`;


export const HeaderEndContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  ${mq[0]} {
    display: none;
  }
`;

export const DonateButton = styled("button")`
  background-color: #fff;
  color: #970361;
  padding: 0.8em 2em;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  display: inline-block;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  min-width: 10em;
  font-size: 1.5rem;
  &:hover {
    background-color: #4c0231;
    color: #fff;
  }
`;

export const DonateButtonText = styled("span")``;

export const OnlineCommunityContainer = styled("button")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  ${mq[0]} {
    display: none;
  }
`;

export const OnlineCommunityText = styled("span")`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  padding-top: 5px;
`;

export const HeaderNavMenu = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #970361;
  border-bottom: 1px solid #c0bdb9;
  padding: 18px 25px;

  ${mq[0]} {
    display: none;
  }
`;

export const NavMenuInnerContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  max-width: 1400px;
`;

export const HeaderNavMenuItem = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  cursor: pointer;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 400;
`;

export const SearchContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  cursor: pointer;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 400;
`;
