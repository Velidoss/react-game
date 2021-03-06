import React, { useContext, useEffect, useState } from 'react';
import GameContext from '../../../Context/GameContext/GameContext';
import gameConstants from './../../../constants/gameConstants';
import { Row, Col, Spin } from 'antd';
import WeaponComponent from './../ChooseWeapon/Weapon/WeaponComponent';
import ResultComponent from '../ResultComponent/ResultComponent';
import MainContext from './../../../Context/MainContext/MainContext';

const FightComponent = () => {

  const {
    state:{
      weapon, enemyWeapon
    },
    setScoreAC
  } = useContext(GameContext);
  const {gameRegime} = useContext(MainContext);

  const { weapons} = gameConstants;
  const [loading, toggleLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setScoreAC(weapon, enemyWeapon);
      toggleLoading(false)
    }, 2000);
  }, []);

  const weaponData = weapons.find((item) => item.name === weapon ); 
  const enemyWeaponData = weapons.find((item) => item.name === enemyWeapon );

  return !loading ? (
    <Row
      style={{
        width: '100%'
      }}
      justify="center"
    >
      <Col span={12} >
        <Row  justify="space-around">
          <Col>      
            <h2>Your weapon</h2>
            {
              weaponData && <WeaponComponent
                image={weaponData.imagePath}
                text={weaponData.name}
              />
            }
          </Col>
          <Col>
            <h2>Enemy weapon</h2>
            {
              enemyWeaponData && <WeaponComponent
                image={enemyWeaponData.imagePath}
                text={enemyWeaponData.name}
              />
            }
          </Col>
        </Row>
        <ResultComponent gameRegime={gameRegime}/>
      </Col>
    </Row>
  )
  : (
    <Spin/>
  )
};

export default FightComponent