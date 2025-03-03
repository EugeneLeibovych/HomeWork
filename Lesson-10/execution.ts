import { Chess, Football, IGame, IBallGame } from './classes';

export function startGame(game: IGame): void {
    game.play();
}

export function playBallGame(game: IBallGame): void {
    game.getBall();
}

const chess = new Chess();
const football = new Football();

startGame(chess);
startGame(football);
playBallGame(football);
