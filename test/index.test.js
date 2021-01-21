const chai = require('chai');
const Panda = require('../dist/index');
var expect = chai.expect;
var p = new Panda;

describe('And Last sing a song', function () {
    it('listen to the panda\'s song', function () {
        expect(p.sing({ name: 'The song of bamboo', singer: 'Panda' })).to.equal('A song named The song of bamboo sang by Panda');
    });
});
describe('Say sth to the world', function () {
    it('What will you sing about', function () {
        expect(p.speak("save the world")).to.equal("save the world");
    });
});
describe('Now jump ahead', function () {
    it('How tall can panda jump(cm)', function () {
        expect(p.jump(1, 2)).to.equal(3);
    });
});
describe('What is your weapon? Panda', function () {
    it('should return an weapon', function () {
        expect(p.weapon()).to.equal('bamboo');
    });
});
describe('What is the color of your fur..? Panda', function () {
    it('should return fur color', function () {
        expect(p.furColor()).to.equal('black-and-white');
    });
});
describe('Do you have armour? Panda', function () {
    it('should return a boolean value', function () {
        expect(p.armour()).to.be.ok;
    });
});
