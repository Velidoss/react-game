import paper from '../assets/images/paper.png';
import rock from '../assets/images/rock.png';
import scissor from '../assets/images/scissor.png';

const gameConstants = {
  weapons: [
    {
      name: 'rock',
      imagePath: rock,
    },
    {
      name: 'scissor',
      imagePath: scissor,
    },
    {
      name: 'paper',
      imagePath: paper,
    },
  ],
  gameRegimes: [
    'bo3', 'bo5', 'domination',
  ],
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