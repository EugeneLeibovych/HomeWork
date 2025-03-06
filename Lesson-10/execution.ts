import { Chess, Football, IGame, IBallGame } from './classes';

export function startGame(game: IGame): string {
    return game.play();
}

export function playBallGame(game: IBallGame): string {
    return game.getBall();
}

const chess = new Chess();
const football = new Football();

startGame(chess);
startGame(football);
playBallGame(football);
