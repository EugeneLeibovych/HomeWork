import { expect } from 'chai';
import { Chess, Football } from '../../classes';


describe('Mocha tests for Chess and Football classes', () => {
    describe('Chess Class', () => {
        it('should create a Chess instance with correct title', () => {
            const chess = new Chess();
            const result = chess.play();
            expect(chess).to.be.instanceOf(Chess);
            expect(chess).to.have.property('title', 'Chess');
            expect(result).to.equal('Playing \'Chess\'.');
        });
        it('should call play method without throwing errors', () => {
            const chess = new Chess();
            expect(() => chess.play()).to.not.throw();
        });
    });

    describe('Football Class', () => {
        it('should create a Football instance with correct title', () => {
            const football = new Football();
            const result = football.play();
            expect(football).to.be.instanceOf(Football);
            expect(football).to.have.property('title', 'Football');
            expect(result).to.equal('Playing \'Football\'.');
        });
        it('should call play method without throwing errors', () => {
            const football = new Football();
            expect(() => football.play()).to.not.throw();
        });
        it('should call getBall method without throwing errors', () => {
            const football = new Football();
            expect(() => football.getBall()).to.not.throw();
        });
    });
});
