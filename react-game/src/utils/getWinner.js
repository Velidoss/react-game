import gameConstants from './../constants/gameConstants';

const getWinner = (weapon, enemyWeapon) => {
  const {tie, win, loss} = gameConstants.gameResults;
  let result;
  if (weapon === enemyWeapon ) {
    result = tie;
  }
  if (
      (weapon === 'rock' && enemyWeapon === 'scissor') 
      || (weapon === 'scissor' && enemyWeapon === 'paper') 
      || (weapon === 'paper' && enemyWeapon === 'rock') 
    ) {
    result = win;
  }
  if (      
      (enemyWeapon === 'rock' && weapon === 'scissor') 
      || (enemyWeapon === 'scissor' && weapon === 'paper') 
      || (enemyWeapon === 'paper' && weapon === 'rock')  
    ) {
    result = loss;
  }
  return result;
};  

export default getWinner;