const checkIsGameFinished = (score, regime) => {
  const {player, enemy} = score;
  if (regime === 'bo3') {
    return (player === 2 || enemy === 2) && true; 
  }
  if (regime === 'bo5') {
    return (player === 3 || enemy === 3) && true; 
  }
  if (regime === 'domination') {
    return (player - enemy >= 2 || enemy - player >= 2) && true; 
  }
  return false;
};

export default checkIsGameFinished;