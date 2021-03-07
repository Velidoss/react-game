import React, {useContext} from 'react';
import gameConstants from './../../../constants/gameConstants';
import GameContext from '../../../Context/GameContext/GameContext';
import WeaponComponent from './Weapon/WeaponComponent';
import { Row, Col, Space } from 'antd';
import style from './ChooseWeapon.module.scss';
import GlobalContext from './../../../Context/GlobalContext/GlobalContext';

const ChooseWeaponComponent = () => {
  const {
    setWeaponAC,
    setEnemyWeaponAC,
    switchStageAC
  } = useContext(GameContext);

  const {languageState} = useContext(GlobalContext);

  const {weapons, gameStages:{fight}} = gameConstants;

  const chooseWeapon = (weapon) => {
    setWeaponAC(weapon);
    setEnemyWeaponAC();
    switchStageAC(fight);
  };

  return (
    <Row 
      className={style.container}
    >
      <Col span={24} className={style.container_items}>
        <h2>{languageState === 'title' ? 'Choose your weapon' : 'Выбери оружие'}</h2>
        <Space size={18}>
          {
            weapons.map((item, index) => (
              <WeaponComponent
                key={index}
                image={item.imagePath}
                text={item[languageState]}
                onClickCallBack={() => chooseWeapon(item.title)}
              />
            ))
          }
        </Space>

      </Col>
    </Row>
  )
};

export default ChooseWeaponComponent