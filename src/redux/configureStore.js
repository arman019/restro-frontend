// we are gonna create store in here. create store has  attb reducer ,state, dispatcher

import {createStore} from 'redux';
import{ Reducer, initialState} from './reducer';

export const ConfigureStore=() =>{

    const store = createStore(
        Reducer,
        initialState
    );
    
    return store;
}

