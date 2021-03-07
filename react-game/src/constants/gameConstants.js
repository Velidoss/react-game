import paper from '../assets/images/paper.png';
import rock from '../assets/images/rock.png';
import scissor from '../assets/images/scissor.png';

const gameConstants = {
  weapons: [
    {
      title: 'rock',
      imagePath: rock,
      ruTitle: 'камень'
    },
    {
      title: 'scissor',
      imagePath: scissor,
      ruTitle: 'ножницы'
    },
    {
      title: 'paper',
      imagePath: paper,
      ruTitle: 'бумага'
    },
  ],
  gameRegimes: [
    'bo3', 'bo5', 'domination',
  ],
  gameRegimesDescriptions: {
    bo3: {
      title: 'Who gets 2 points - wins a game',
      ruTitle: 'Побеждает тот, кто наберет 2 очка',
    },
    bo5: {
      title: 'Who gets 3 points - wins a game',
      ruTitle: 'Побеждает тот, кто наберет 3 очка',
    },
    domination: {
      title: 'Who gets ahead of his enemy on 2 points - wins a game',
      ruTitle: 'Побеждает тот, кто перегонит противника на 2 очка',
    },
  },
  gameStages: {
    choose: 'choose', 
    fight: 'fight', 
    result: 'result',
  },
  gameResults: {
    tie: 'tie',
    win: 'win',
    loss: 'loss',
  }
};

export default gameConstants;