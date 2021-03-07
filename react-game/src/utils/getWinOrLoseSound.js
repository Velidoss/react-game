import {tieSound, winSound, lossSound} from './../sounds/sounds';

const getWinOrLoseSound = (result) => {
  switch(result) {
    case 'win':
      return winSound;
    case 'loss':
      return lossSound;
    default:
      return tieSound;
  }
};

export default getWinOrLoseSound;