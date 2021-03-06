import { combineReducers } from 'redux';
import plusScoreReducer from './plusScoreReducer';
import isCorrectReducer from './isCorrectReducer';
// import { updateIndex } from '../actionCreators';
import updateIndexReducer from './updateIndexReducer';
import soundReducer from './soundReducer';
import disableAnswerReducer from './disableAnswerReducer';
import getDataReducer from './getDataReducer';
import userReducer from './userReducer';
import levelReducer from './levelReducer';
import winFlagReducer from './winFlagReducer';
import userCustom from './userCustom';
import pausingReducer from './pausingReducer';
import gamePlayingReducer from './gamePlayingReducer';

const reducer = combineReducers({
    plusScore: plusScoreReducer,
    isCorrect: isCorrectReducer,
    updateIndex: updateIndexReducer,
    level: levelReducer,
    soundStatus: soundReducer,
    disableAnswer: disableAnswerReducer,
    quizData: getDataReducer,
    user: userReducer,
    winFlag: winFlagReducer,
    userCustom: userCustom,
    pausing: pausingReducer,
    gamePlaying: gamePlayingReducer
});

export default reducer;