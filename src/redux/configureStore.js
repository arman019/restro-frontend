// we are gonna create store in here. create store has  attb reducer ,state, dispatcher
import {createStore,combineReducers,applyMiddleware} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form';
import {InitialFeedback} from './forms';

export const ConfigureStore=() =>{

    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments:Comments,
            promotions:Promotions,
            leaders:Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)

    );

    //here feedback is the copy of form when we pass this to Maincomponenet  resetFeedbackForm:() =>{dispatch(actions.reset('feedback'))}
    //this upper codes actions.reset("feedback"), here feedback is the modl name which should be same as configureStores creatForms name which is 'feedback'
    
    return store;
}

