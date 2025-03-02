import { Chess, Football, IGame, IBallGame } from './classes';

function startGame(game: IGame): void {
    game.play();
}

function playBallGame(game: IBallGame): void {
    game.getBall();
}

const chess = new Chess();
const football = new Football();

startGame(chess);
startGame(football);
playBallGame(football);
