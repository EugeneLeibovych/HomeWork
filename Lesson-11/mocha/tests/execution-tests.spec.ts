import { Chess, Football } from '../../classes';
import { startGame, playBallGame } from '../../execution';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Mocha tests for Chess and Football classes Execution', () => {
    describe('startGame', () => {
        it('should call the play method of the game object', () => {
            const chess = new Chess();
            const football = new Football();
            const chessSpy = sinon.spy(chess, 'play');
            const footballSpy = sinon.spy(football, 'play');

            startGame(chess);
            expect(chessSpy.calledOnce).to.be.true;

            startGame(football);
            expect(footballSpy.calledOnce).to.be.true;

            chessSpy.restore();
            footballSpy.restore();
        });
    });

    describe('playBallGame', () => {
        it('should call the getBall method of the IBallGame object', () => {
            const football = new Football();
            const footballSpy = sinon.spy(football, 'getBall');

            playBallGame(football);
            expect(footballSpy.calledOnce).to.be.true;

            footballSpy.restore();
        });
    });
});
