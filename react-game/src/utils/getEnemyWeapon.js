import gameConstants from './../constants/gameConstants';

const getEnemyWeapon = () => {
  const {weapons} = gameConstants;

  return weapons[Math.floor(Math.random() * 3)]

};

export default getEnemyWeapon;