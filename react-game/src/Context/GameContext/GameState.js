import React, {useReducer} from 'react';
import GameContext from './GameContext';
import GameReducer from './GameReducer';
import { 
  SET_WEAPON, 
  SET_ENEMY_WEAPON, 
  ADD_WIN, 
  SWITCH_STAGE,
  EVALUATE_FIGHT, 
  SET_REGIME} from './actions';
import getEnemyWeapon from '../../utils/getEnemyWeapon';
import getWinner from './../../utils/getWinner';
import gameConstants from './../../constants/gameConstants';

const GameState = ({children}) => {

  const {gameResults:{tie, win, loss}} = gameConstants;
  const initialState = {
    weapon: '',
    enemyWeapon: '',
    fightResult: '',
    gameStage: 'choose',
    score: {
      player: 0,
      enemy: 0,
    }
  };
  
  const [state, dispatch] = useReducer(GameReducer, initialState);

  const setWeaponAC = (weapon) => {
    dispatch({
      type: SET_WEAPON,
      payload: weapon
    });
  }
  
  const setEnemyWeaponAC = () => {
    const weapon = getEnemyWeapon();
    dispatch({
      type: SET_ENEMY_WEAPON,
      payload: weapon
    })
  }

  const switchStageAC = (stage) => {
    dispatch({
      type: SWITCH_STAGE,
      payload: stage
    })
  }

  const evaluateFightAC = (result) => {
    dispatch({
      type: EVALUATE_FIGHT,
      payload: result
    })
  }

  const setScoreAC = (weapon, enemyWeapon) => {
    const result = getWinner(weapon, enemyWeapon);
    let payload;
    if( result === win ) {
      payload = {player: 'player'};
    }
    if( result === loss ) {
      payload = {enemy: 'enemy'};
    }
    if( result === tie ) {
      payload = {player: 'player', enemy: 'enemy'};
    }
    evaluateFightAC(result)
    dispatch({
      type: ADD_WIN,
      payload: payload
    });
  }

  return <GameContext.Provider
    value={{
      state,
      setWeaponAC,
      setEnemyWeaponAC,
      setScoreAC,
      switchStageAC,
      evaluateFightAC,
    }}
  >
    {children}
  </GameContext.Provider>

};

export default GameState;