import { createStore , applyMiddleware} from "redux";
import rootReducer from "./Reducer";
import createSagaMiddleware from 'redux-saga';
import userSendAll from "./saga/mysaga";


const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userSendAll)

export default store;