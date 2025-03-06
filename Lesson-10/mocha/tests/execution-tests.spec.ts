import { expect } from 'chai';
import { Chess, Football } from '../../classes';
import { startGame, playBallGame } from '../../execution';

describe('Mocha tests for Chess and Football classes Execution', () => {
    describe('startGame function', () => {
        it('should call play method of Chess', () => {
            const chess = new Chess();
            expect(startGame(chess)).to.equal('Playing \'Chess\'.');
        });
        it('should call play method of Football', () => {
            const football = new Football();
            expect(startGame(football)).to.equal('Playing \'Football\'.');
        });
    });
    describe('playBallGame function', () => {
        it('should call getBall method of Football', () => {
            const football = new Football();
            expect(playBallGame(football)).to.equal('Getting to play football.');
        });
    });
});
