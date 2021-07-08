import { useState, useEffect, useRef } from "react";
import axios from "axios";

const BASE_URL = "http://deckofcardsapi.com/api/deck";

const Deck = () => {
  const [deck, setDeck] = useState(null);
  const card = useRef(null);
  useEffect(() => {
    axios.get(`${BASE_URL}/new`).then((res) => setDeck(res.data.deck_id));
  }, [setDeck]);
  const drawCard = () => {
    console.log(card);
  };
  return (
    <>
      <h3>{deck}</h3>
      <button onClick={drawCard}>Gimme a Card!</button>
    </>
  );
};

export default Deck;
