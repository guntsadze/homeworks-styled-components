import styled from "styled-components";
import Images from "../Images";

export default function OrderSummary() {
  return (
    <>
      <OrderSummarySection>
        <OrderSummaryComponent>
          <CancelBtn>Cancel Order</CancelBtn>
          <PaymentDiv>
            <PaymentDivP>Proceed to Payment</PaymentDivP>
            <PaymentRectangle></PaymentRectangle>
          </PaymentDiv>
          <MusicContainer>
            <MusicContainerTwo>
              <MusicImg src={Images.music} alt="music" />
              <ChangeMusicP>Change</ChangeMusicP>
              <MusicTitle>
                <Price>$59.99/year</Price>
                <PriceP>Annual Plan</PriceP>
              </MusicTitle>
            </MusicContainerTwo>
          </MusicContainer>
          <Title>Order Summary</Title>
          <Par>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </Par>
          <Boy src={Images.boy} alt="boy" />
        </OrderSummaryComponent>
        <OrdersImg src={Images.back} alt="order" />
      </OrderSummarySection>
    </>
  );
}

const OrderSummarySection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Boy = styled.img`
  position: absolute;
  width: 450px;
  height: 220px;
  left: 0px;
  top: 0px;
  border-radius: 20px 20px 0 0;
`;

const OrderSummaryComponent = styled.div`
  z-index: 2;
  position: absolute;
  width: 450px;
  height: 697px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 40px 40px -20px rgba(13, 48, 189, 0.151826);
`;

const Title = styled.h1`
  font-family: "Red Hat Display", sans-serif;
  width: 354px;
  position: absolute;
  height: 37px;
  left: 10.67%;
  right: 10.67%;
  top: calc(50% - 37px / 2 - 65px);
  font-weight: 900;
  font-size: 28px;
  line-height: 37px;
  text-align: center;
`;

const Par = styled.p`
  font-family: "Red Hat Display", sans-serif;
  position: absolute;
  height: 78px;
  left: 10.67%;
  right: 10.67%;
  top: calc(50% - 78px / 2 + 9.5px);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
`;

const MusicContainer = styled.div`
  position: absolute;
  width: 354px;
  height: 98px;
  top: 417px;
  left: 48px;
  background-color: #f7f9ff;
`;

const PaymentDiv = styled.div`
  width: 354px;
  height: 50px;
  position: absolute;
  left: 10.67%;
  right: 10.67%;
  top: 78.48%;
  bottom: 14.35%;
`;

const PaymentDivP = styled.div`
  width: 150px;
  height: 20px;
  color: white;
  position: absolute;
  height: 20px;
  left: 28.81%;
  right: 28.81%;
  top: calc(50% - 20px / 2);
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
  transition: 0.3s;
  cursor: pointer;
`;

const OrdersImg = styled.img`
  height: 50vh;
  width: 99vw;
  position: absolute;
  top: 200%;
  z-index: 1;
`;

const CancelBtn = styled.p`
  &:hover {
    color: #1f2e55;
  }
  font-family: "Red Hat Display", sans-serif;
  width: 96px;
  position: absolute;
  height: 20px;
  left: 39.11%;
  right: 39.56%;
  top: calc(50% - 20px / 2 + 290.5px);
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
  color: #717fa6;
  cursor: pointer;
  transition: 0.3s;
`;

const PaymentRectangle = styled.div`
  &:hover {
    background: #766cf1;
    box-shadow: 0px 20px 20px rgba(56, 42, 225, 0.190291);
  }
  width: 354px;
  height: 50px;
  border-radius: 11px;
  background-color: #382ae1;
  left: 0%;
  right: 0%;
  top: 30%;
  bottom: 0%;
  box-shadow: 0px 20px 20px rgba(56, 42, 225, 0.190291);
  cursor: pointer;
  transition: 0.3s;
`;

const MusicContainerTwo = styled.div`
  width: 306px;
  height: 48px;
  left: 16%;
  right: 16%;
  top: 63.41%;
  bottom: 29.7%;
`;

const MusicImg = styled.img`
  position: absolute;
  width: 48px;
  height: 48px;
  left: 25px;
  top: 25px;
`;

const ChangeMusicP = styled.p`
  &:hover {
    border: 1px solid #000000;
    box-shadow: 0px 1px 2px #000000;
    text-decoration-line: none;
  }
  font-family: "Red Hat Display", sans-serif;
  width: 52px;
  position: absolute;
  height: 19px;
  left: 79.01%;
  right: 0%;
  top: calc(33% - 19px / 2 + 0.5px);
  color: #382ae1;
  line-height: 18.52px;
  font-size: 14px;
  text-decoration-line: underline;
  cursor: pointer;
  transition: 0.3s;
`;

const MusicTitle = styled.div`
  width: 92px;
  height: 48px;
  position: absolute;
  left: 25.22%;
  right: 46.71%;
  top: 8%;
  bottom: 0%;
`;

const Price = styled.p`
  font-family: "Red Hat Display", sans-serif;
  width: 92px;
  height: 21px;
  color: #717fa6;
  position: absolute;
  height: 21px;
  left: 0%;
  right: 0%;
  top: calc(50% - 21px / 2 + 13.5px);
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
`;

const PriceP = styled.p`
  font-family: "Red Hat Display", sans-serif;
  position: absolute;
  height: 21px;
  left: 0%;
  right: -27.38%;
  top: calc(50% - 21px / 2 - 13.5px);
  font-weight: 900;
  font-size: 16px;
  line-height: 21.17px;
`;
