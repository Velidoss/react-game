import React, {useContext} from 'react';
import gameConstants from './../../../constants/gameConstants';
import { Button } from 'antd';
import GameContext from '../../../Context/GameContext/GameContext';

const ChooseWeaponComponent = () => {
  const {
    state,
    setWeaponAC,
    setEnemyWeaponAC,
    switchStageAC
  } = useContext(GameContext);

  const {weapons, gameStages:{fight}} = gameConstants;

  return (
    <div>
      <h2>Choose your weapon</h2>
      {
        weapons.map((item) => (
          <Button onClick={() => {
            setWeaponAC(item);
            setEnemyWeaponAC();
            switchStageAC(fight);
          }}>
            {item}
          </Button>
        ))
      }
    </div>
  )
};

export default ChooseWeaponComponent