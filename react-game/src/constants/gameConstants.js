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
  gameRegimesDescriptions: {
    bo3: {
      description: 'Who gets 2 points - wins a game'
    },
    bo5: {
      description: 'Who gets 3 points - wins a game'
    },
    domination: {
      description: 'Who gets ahead of his enemy on 2 points - wins a game'
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