import { combineReducers } from 'redux';
import testReducer, { widget as testWidget } from '../duck/test';

export const rootReducer = combineReducers({
    [testWidget]: testReducer
});