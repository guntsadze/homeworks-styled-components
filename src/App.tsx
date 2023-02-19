import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import EthCard from "./Eth-Card/main";
import QRCard from "./QR-Card/main";
import OrderSummary from "./Order-Summary/main";

function App() {
  return (
    <>
      <QRCard />
      <EthCard />
      <OrderSummary />
    </>
  );
}

export default App;
