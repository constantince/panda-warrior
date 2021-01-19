class PandaWarrior {
  constructor() {
    console.log('hello world');
  }

  armour() {
    return 'dinosou';
  }

  weapon() {
    return 'bamboo';
  }

  fuly() {
    return 'black-and-white';
  }

  shout(type: string) {
    return type === 'frined' ? 'hi would like an banoo' : 'get out of here';
  }
}

export default PandaWarrior;
