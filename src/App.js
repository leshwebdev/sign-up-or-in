import React, { useState } from "react";
import Front from "./Front";
import Back from "./Back";
import "./App.css";
import { Image, Container, Row } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";


function App() {
  const [state, setState] = useState({
    cardFlipped: false,
  });

  const flipCard = () => {
    setState({ cardFlipped: !state.cardFlipped });
  };

  return (
    <div>
      <Image className="background-img" src="./img/background.png" fluid />
      <Container className="App d-flex" fluid>
        <Row className="cust-row my-auto">
          <div className="mx-auto">
            <ReactCardFlip isFlipped={state.cardFlipped} flipDirection="horizontal">
              <Front onFlipCard={flipCard}  />
              <Back onFlipCard={flipCard} />
            </ReactCardFlip>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
