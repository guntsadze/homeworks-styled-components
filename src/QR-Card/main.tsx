import styled from "styled-components";
import Images from "../Images";
import { GlobalStyle } from "../reset";

export default function QRCard() {
  return (
    <>
      <GlobalStyle />
      <QrCard>
        <QrCardContainer>
          <Img src={Images.QR} />
          <Title>Improve your front-end skills by building projects</Title>
          <Content>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </Content>
        </QrCardContainer>
      </QrCard>
    </>
  );
}

const QrCard = styled.section`
  height: 100vh;
  background-color: #1f314f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QrCardContainer = styled.div`
  width: 320px;
  height: 497px;
  position: relative;
  background-color: #ffffff;
  box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.0476518);
  border-radius: 20px;
`;

const Title = styled.h2`
  font-family: "Outfit", sans-serif;
  position: absolute;
  top: 61%;
  line-height: 30px;
  text-align: center;
  color: #1f314f;
  width: 302px;
  font-weight: 700;
  line-height: 28px;
`;

const Content = styled.p`
  font-family: "Outfit", sans-serif;
  position: absolute;
  width: 254px;
  bottom: 5%;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.1875px;
  left: 8%;
`;

const Img = styled.img`
  position: absolute;
  width: 288px;
  height: 288px;
  border-radius: 10px;
  left: 5%;
  top: 3%;
`;
