import { Chess, Football, IGame } from './classes';

function startGame(game: IGame): void {
    game.play();
}

const chess = new Chess();
const football = new Football();

startGame(chess);
startGame(football);
