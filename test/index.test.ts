import words from '../src/speak';
import * as chai from 'chai';
import jump from '../src/jump';
import sing from '../src/sing';

const expect = chai.expect;

describe('Say sth to the world', () => {
  it('should be able to ouput things correctly' , () => {
    expect(words('hello world')).to.equal("hello world");
  });
});

describe('Now jump ahead', () => {
  it('should be able to ouput things correctly' , () => {
    expect(jump(1, 2)).to.equal(3);
  });
});

describe('And Last sing a song', () => {
  it('should be able to ouput things correctly' , () => {
    expect(sing({name: 'The song of bamboo', singer: 'Panda'})).to.equal('A song named The song of bamboo sang by Panda');
  });
})