import { combineReducers } from 'redux';
import groceryRed from './groceryRed';
import basketRed from './basketRed';

export default combineReducers({ groceryRed, basketRed });
