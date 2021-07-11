import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css";

import CardGame from './src/components/CardGame';

const $root = document.querySelector("#root"); // API do DOM
const $htmlCardGame = CardGame()

console.log($htmlCardGame);

$root.insertAdjacentHTML("beforeend", $htmlCardGame);


// toda variável que começa $ guarda uma referência/elemento da tela.