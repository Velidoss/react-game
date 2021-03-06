import { 
  SET_WEAPON, 
  ADD_WIN, 
  SET_ENEMY_WEAPON, 
  EVALUATE_FIGHT,
  SWITCH_STAGE,
  REFRESH_STATE
} from './actions';


const GameReducer = (state, action) => {
  const {type, payload} = action;
  switch(type) {
    case SET_WEAPON:
      return {
        ...state,
        weapon: payload
      }
    case SET_ENEMY_WEAPON:
      return {
        ...state,
        enemyWeapon: payload
      }
    case EVALUATE_FIGHT:
      return {
        ...state,
        fightResult: payload
      }
    case SWITCH_STAGE:
      return {
        ...state,
        gameStage: payload,
      }
    case REFRESH_STATE:
      return {
        weapon: '',
        enemyWeapon: '',
        fightResult: '',
        gameStage: 'choose',
        score: {
          player: 0,
          enemy: 0,
        }
      }
    case ADD_WIN: 
      if(!payload.player && !payload.enemy) {
        return {
          ...state,
        }
      } 
      if(payload.player) {
        return {
          ...state, 
          score: {...state.score, 
            player: state.score.player + 1,
          }
        }
      } 
      if(payload.enemy) {
        return {
          ...state, 
          score: {...state.score, 
            enemy: state.score.enemy + 1,
          }
        }
      } 
      break;
    default: 
      return state;
  }
};


export default GameReducer;