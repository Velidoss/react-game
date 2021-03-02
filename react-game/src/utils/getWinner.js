import gameConstants from './../constants/gameConstants';

const getWinner = (weapon, enemyWeapon) => {
  const {tie, win, loss} = gameConstants.gameResults;
  let result;
  if (weapon === enemyWeapon ) {
    result = tie;
  }
  if (
      (weapon === 'Rock' && enemyWeapon === 'Scissor') 
      || (weapon === 'Scissor' && enemyWeapon === 'Paper') 
      || (weapon === 'Paper' && enemyWeapon === 'Rock') 
    ) {
    result = win;
  }
  if (      
      (enemyWeapon === 'Rock' && weapon === 'Scissor') 
      || (enemyWeapon === 'Scissor' && weapon === 'Paper') 
      || (enemyWeapon === 'Paper' && weapon === 'Rock')  
    ) {
    result = loss;
  }
  return result;
};  

export default getWinner;