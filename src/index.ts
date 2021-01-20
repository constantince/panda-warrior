import Speak from './speak';
import Jump from './jump';
import Sing from './sing';

class PandaWarrior {
  constructor() {
    console.log('hello world');
  }

  armour() {
    return true;
  }

  speak = Speak;

  jump = Jump;

  sing = Sing;

  weapon() {
    return 'bamboo';
  }

  furColor() {
    return 'black-and-white';
  }

  shout(type: string) {
    return type === 'frined' ? 'hi would like an banoo' : 'get out of here';
  }
}

export default PandaWarrior;
