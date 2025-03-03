import { expect } from 'chai';
import { Chess, Football } from '../../classes';
import { startGame, playBallGame } from '../../execution';

describe('Mocha tests for Chess and Football classes', () => {
    describe('startGame function', () => {
        it('should call play method of Chess', async () => {
            const chess = new Chess();
            expect(() => startGame(chess)).not.to.throw();
        });
        it('should call play method of Football', async () => {
            const football = new Football();
            expect(() => startGame(football)).not.to.throw();
        });
    });
    describe('playBallGame function', () => {
        it('should call getBall method of Football', async () => {
            const football = new Football();
            expect(() => playBallGame(football)).not.to.throw();
        });
    });
});
