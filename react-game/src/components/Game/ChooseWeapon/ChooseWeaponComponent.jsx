import React, {useContext} from 'react';
import gameConstants from './../../../constants/gameConstants';
import GameContext from '../../../Context/GameContext/GameContext';
import WeaponComponent from './Weapon/WeaponComponent';

const ChooseWeaponComponent = () => {
  const {
    state,
    setWeaponAC,
    setEnemyWeaponAC,
    switchStageAC
  } = useContext(GameContext);

  const {weapons, gameStages:{fight}} = gameConstants;

  const chooseWeapon = (weapon) => {
    setWeaponAC(weapon);
    setEnemyWeaponAC();
    switchStageAC(fight);
  }
  return (
    <div>
      <h2>Choose your weapon</h2>
      {
        weapons.map((item) => (
          <WeaponComponent
            image={item.imagePath}
            text={item.name}
            onClickCallBack={() => chooseWeapon(item.name)}
           />
        ))
      }
    </div>
  )
};

export default ChooseWeaponComponent