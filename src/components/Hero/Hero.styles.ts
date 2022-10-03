import styled from "@emotion/styled";

const breakpoints = [576, 768, 992, 1200, 1400];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const HeroContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 750px;
  position: relative;
  overflow: hidden;
  clear: both;
  padding-top: 3%;
  ${mq[0]} {
    padding: 0 20px;
  }
`;

export const HeroTextContainer = styled("div")`
  position: absolute;
  top: 45%;
  left: 15%;
  padding: 3.5rem 15px;
  bottom: auto;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background-color: transparent;
  color: #fff;
  width: 50%;
  padding-right: 4rem;
  font-size: 1.5rem;
  }
`;

export const HeroTitle = styled("p")`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  }
`;

export const HeroSubtitle = styled("h1")`
  font-size: 70px;
  color: white;
  font-weight: 600;
  line-height: 1.2;
  width: 60%;
  margin: 0;
  }
`;

export const HeroText = styled("p")`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  margin: 0;
  width: 70%;
  }
`;
