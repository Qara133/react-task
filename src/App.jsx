import { useState } from "react";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import "./style.css";
import Basket from "./components/Basket/Basket";
import Footer from "./components/Footer/Footer";

function App() {
  const [basket, setBasket] = useState([]);
  const [basketActive, setBasketActive] = useState(false);

  return (
    <>
      <Header />
      {basketActive ? (
        <Basket
          basket={basket}
          setBasket={setBasket}
          setBasketActive={setBasketActive}
        />
      ) : (
        <Container
          basket={basket}
          setBasket={setBasket}
          setBasketActive={setBasketActive}
        />
      )}
         <Footer />
    </>
  );
}

export default App;
