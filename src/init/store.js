import { createStore, compose } from 'redux'
import { rootReducer } from './rootReducer'

const dev = process.env.NODE_ENV === 'development';
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancer = dev && devtools ? devtools : compose;


export default createStore(rootReducer, composeEnhancer())