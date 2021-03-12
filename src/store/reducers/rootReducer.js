import {combineReducers} from 'redux';
import sliderReducer from './sliderReducer';

const rootReducer = combineReducers({slider: sliderReducer});

export default rootReducer;
