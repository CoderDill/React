import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { choice, remove } from "./helpers";
import fruits from "./fruits";

const randFruit = choice(fruits);
const fruitsLeft = remove(fruits, randFruit);
console.log(`I'd like one ${randFruit}, please.`);
console.log(`Here you go: ${randFruit}`);
console.log(`Delicious! May I have another?`);
console.log(`I'm sorry, we're all out. We have ${fruitsLeft} left.`);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
