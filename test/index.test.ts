import * as chai from 'chai';
import Panda from '../src/index';
const expect = chai.expect;

const p = new Panda;

describe('And Last sing a song', () => {
  it('listen to the panda\'s song' , () => {
    expect(p.sing({name: 'The song of bamboo', singer: 'Panda'})).to.equal('A song named The song of bamboo sang by Panda');
  });
})

describe('Say sth to the world', () => {
  it('What will you sing about' , () => {
    expect(p.speak("save the world")).to.equal("save the world");
  });
});

describe('Now jump ahead', () => {
  it('How tall can panda jump(cm)' , () => {
    expect(p.jump(1, 2)).to.equal(3);
  });
});

describe('What is your weapon? Panda', () => {
  it('should return an weapon' , () => {
    expect(p.weapon()).to.equal('bamboo');
  });
})

describe('What is the color of your fur..? Panda', () => {
  it('should return fur color' , () => {
    expect(p.furColor()).to.equal('black-and-white');
  });
})

describe('Do you have armour? Panda', () => {
  it('should return a boolean value' , () => {
    expect(p.armour()).to.be.ok
  });
})