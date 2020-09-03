// we are gonna create store in here. create store has  attb reducer ,state, dispatcher

import {createStore,combineReducers} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const ConfigureStore=() =>{

    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments:Comments,
            promotions:Promotions,
            leaders:Leaders
        })

    );
    
    return store;
}

