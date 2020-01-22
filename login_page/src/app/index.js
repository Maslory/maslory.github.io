import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.sass';
import App from './app';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import mySagas from './store/sagas'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import initialState from './store/InitialState'
import { Token, Checked, Login, Password } from './reducers/reducers'


const sagaMiddleware = createSagaMiddleware();

const logger = store => next => action => {
    let result
    console.groupCollapsed('dispatching', action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
}
const saver = store => next => action => {
    let result = next(action)
    // localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}


const storeFactory = (state = initialState) =>
    applyMiddleware(sagaMiddleware, logger, saver)(createStore)(
        combineReducers({ Token, Checked, Login, Password }),
        // (localStorage['redux-store']) ?
        //     JSON.parse(localStorage['redux-store']) :
        state
    )


const store = storeFactory()
sagaMiddleware.run(mySagas);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))

