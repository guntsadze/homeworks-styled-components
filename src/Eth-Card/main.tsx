import styled from "styled-components";
import Images from "../Images";

export default function EthCard() {
  return (
    <>
      <Section>
        <EthCardContainer>
          <EthClock>
            <ClockImg src={Images.clock} alt="logo" />
            <SpanClock>3 days left</SpanClock>

            <EthImg src={Images.eth} alt="eth image" />
            <SpanEth>0.041eth</SpanEth>
          </EthClock>
          <Content>
            Our Equilibrium collection promotes balance and calm.
          </Content>
          <Rectangle></Rectangle>
          <Profile>
            <ProfileImg src={Images.avatar} />
            <NameUsername>
              <NSpan>Jules Wyvern</NSpan>
              <CSpan>Creation of</CSpan>
            </NameUsername>
          </Profile>
          <Title>Equilibrium #3429</Title>
          <Eye className="eye" src={Images.eye} alt="eye" />
          <Cube src={Images.cube} />
          <CopyCube></CopyCube>
        </EthCardContainer>
      </Section>
    </>
  );
}

const Section = styled.section`
  height: 100vh;
  background-color: #657185;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EthCardContainer = styled.div`
  position: relative;
  width: 350px;
  height: 596px;
  background: #15263f;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.0952917);
  border-radius: 15px;
`;

const EthClock = styled.div`
  width: 301px;
  height: 20px;
  position: absolute;
  left: 6.86%;
  right: 7.14%;
  top: 78.86%;
  bottom: 17.79%;
`;

const ClockImg = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  left: 203.3px;
  top: 2.67px;
  cursor: pointer;
`;

const SpanClock = styled.span`
  font-family: "Outfit", sans-serif;
  position: absolute;
  width: 73px;
  height: 20px;
  left: 75.42%;
  right: 0.33%;
  top: calc(50% - 20px / 2);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20.16px;
  color: #8bacd9;
  cursor: pointer;
`;

const EthImg = styled.img`
  position: absolute;
  width: 11px;
  height: 18px;
  left: 0%;
  right: 88.23%;
  top: 5%;
  bottom: 5%;
  cursor: pointer;
`;

const SpanEth = styled.span`
  font-family: "Outfit", sans-serif;
  position: absolute;
  height: 20px;
  left: 5.7%;
  right: 1.07%;
  top: calc(50% - 20px / 2);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20.16px;
  color: #00fff8;
  width: 75px;
  height: 20px;
  cursor: pointer;
  text-transform: uppercase;
`;

const Content = styled.h3`
  font-family: "Outfit", sans-serif;
  position: absolute;
  height: 52px;
  left: 6.86%;
  right: 6.86%;
  top: calc(50% - 52px / 2 + 122px);
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  color: #8bacd9;
`;

const Rectangle = styled.div`
  position: absolute;
  left: 6.86%;
  right: 6.86%;
  top: 86.24%;
  bottom: 13.59%;
  background: #2e405a;
  width: 302px;
  height: 1px;
`;

const Profile = styled.div`
  position: absolute;
  width: 230px;
  height: 33px;
  left: 6.86%;
  right: 83.71%;
  top: 89.09%;
  bottom: 5.37%;
`;

const ProfileImg = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border: 1px solid wheat;
  cursor: pointer;
`;

const NameUsername = styled.div`
  position: absolute;
  left: 20.86%;
  right: 27.43%;
  bottom: 6.54%;
  width: 181px;
  height: 20px;
`;

const NSpan = styled.span`
  &:hover {
    color: #00fff8;
    cursor: pointer;
  }
  font-family: "Outfit", sans-serif;
  position: absolute;
  width: 93px;
  color: white;
  font-size: 16px;
  line-height: 20px;
  height: 20px;
  left: 47.51%;
  right: 1.1%;
  top: calc(50% - 20px / 2);
  transition: 0.3s;
`;

const CSpan = styled.span`
  font-family: "Outfit", sans-serif;
  position: absolute;
  height: 20px;
  left: 0%;
  right: 55.25%;
  top: calc(50% - 20px / 2);
  color: #8bacd9;
  font-weight: 400;
  font-size: 16px;
`;

const Title = styled.h1`
  &:hover {
    color: #00fff8;
    transition: 0.3s;
    cursor: pointer;
    opacity: 0.5;
  }
  font-family: "Outfit", sans-serif;
  position: absolute;
  left: 6.86%;
  right: 6.86%;
  top: 58.72%;
  bottom: 36.58%;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #ffffff;
  height: 28px;
  width: 302px;
`;

const Cube = styled.img`
  position: absolute;
  height: 302px;
  width: 302px;
  left: 6.86%;
  right: 6.86%;
  top: 4.03%;
  bottom: 45.3%;
  border-radius: 8px;
  cursor: pointer;
`;

const CopyCube = styled.div`
  &:hover {
    background-color: #00fff8;
    opacity: 0.5;
  }

  width: 302px;
  height: 302px;
  position: absolute;
  left: 6.86%;
  right: 6.86%;
  top: 4.03%;
  bottom: 45.3%;
  border-radius: 8px;
  transition: 0.5s;
  cursor: pointer;
`;

const Eye = styled.img`
  &:hover {
    visibility: visible;
  }
  position: absolute;
  width: 48px;
  height: 48px;
  left: 43%;
  top: 25%;
  visibility: hidden;
  transition: 1s;

  ${CopyCube}:hover & {
    visibility: visible;
  }
`;
