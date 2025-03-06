import { expect } from 'chai';
import { Chess, Football } from '../../classes';


describe('Mocha tests for Chess and Football classes', () => {
    describe('Chess Class', () => {
        it('should create a Chess instance with correct title', () => {
            const chess = new Chess();
            expect(chess).to.be.instanceOf(Chess);
            expect(chess).to.have.property('title', 'Chess');
        });
        it('method play should return correct string', () => {
            const chess = new Chess();
            const result = chess.play();
            expect(result).to.equal('Playing \'Chess\'.');
        });
    });

    describe('Football Class', () => {
        it('should create a Football instance with correct title', () => {
            const football = new Football();
            expect(football).to.be.instanceOf(Football);
            expect(football).to.have.property('title', 'Football');
        });
        it('method play should return correct string', () => {
            const football = new Football();
            const result = football.play();
            expect(result).to.equal('Playing \'Football\'.');
        });
        it('method getBall should return correct string', () => {
            const football = new Football();
            expect(football.getBall()).to.equal('Getting to play football.');
        });
    });
});
