import { expect } from 'chai';
import { Chess, Football } from '../../classes';


describe('Mocha tests for Chess and Football classes', () => {
    describe('Chess Class', () => {
        it('should create a Chess instance with correct title', async () => {
            const chess = new Chess();
            expect(chess).to.be.instanceOf(Chess);
            expect(chess).to.have.property('title', 'Chess');
        });
        it('should call play method without throwing errors', async () => {
            const chess = new Chess();
            expect(() => chess.play()).to.not.throw();
        });
    });

    describe('Football Class', () => {
        it('should create a Football instance with correct title', async () => {
            const football = new Football();
            expect(football).to.be.instanceOf(Football);
            expect(football).to.have.property('title', 'Football');
        });
        it('should call play method without throwing errors', async () => {
            const football = new Football();
            expect(() => football.play()).to.not.throw();
        });
        it('should call getBall method without throwing errors', async () => {
            const football = new Football();
            expect(() => football.getBall()).to.not.throw();
        });
    });
});
