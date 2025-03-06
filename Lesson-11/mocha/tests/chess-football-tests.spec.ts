import { Chess, Football } from '../../classes';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Mocha tests for Chess and Football classes', () => {
    describe('Chess Class', () => {
        it('should create a Chess instance', () => {
            const chess = new Chess();
            expect(chess).to.be.an.instanceOf(Chess);
        });

        it('should play the game of chess', () => {
            const chess = new Chess();
            const consoleSpy = sinon.spy(console, 'log');
            chess.play();
            expect(consoleSpy.calledWith('Playing \'Chess\'.')).to.be.true;
            consoleSpy.restore();
        });
    });


    describe('Football Class', () => {
        it('should create a Football instance', () => {
            const football = new Football();
            expect(football).to.be.an.instanceOf(Football);
        });

        it('should play the game of football', () => {
            const football = new Football();
            const consoleSpy = sinon.spy(console, 'log');
            football.play();
            expect(consoleSpy.calledWith('Playing \'Football\'.')).to.be.true;
            consoleSpy.restore();
        });

        it('should get the football', () => {
            const football = new Football();
            const consoleSpy = sinon.spy(console, 'log');
            football.getBall();
            expect(consoleSpy.calledWith('Getting to play football.')).to.be.true;
            consoleSpy.restore();
        });
    });
});
