import React, { useContext, useEffect, useState } from 'react';
import GameContext from '../../../Context/GameContext/GameContext';
import gameConstants from './../../../constants/gameConstants';
import { Row, Col, Spin } from 'antd';
import WeaponComponent from './../ChooseWeapon/Weapon/WeaponComponent';
import ResultComponent from '../ResultComponent/ResultComponent';
import GlobalContext from './../../../Context/GlobalContext/GlobalContext';

const FightComponent = () => {

  const {
    state:{
      weapon, enemyWeapon, gameRegime
    },
    setScoreAC
  } = useContext(GameContext);

  const {languageState} = useContext(GlobalContext);

  const { weapons } = gameConstants;
  const [loading, toggleLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setScoreAC(weapon, enemyWeapon);
      toggleLoading(false)
    }, 2000);
  }, []);

  const weaponData = weapons.find((item) => item.title === weapon ); 
  const enemyWeaponData = weapons.find((item) => item.title === enemyWeapon );

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
            <h2>{languageState === 'title' ? 'Your weapon' : 'Ваше оружие'}</h2>
            {
              weaponData && <WeaponComponent
                image={weaponData.imagePath}
                text={weaponData.name}
              />
            }
          </Col>
          <Col>
          <h2>{languageState === 'title' ? 'Enemy weapon' : 'Оружие врага'}</h2>
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