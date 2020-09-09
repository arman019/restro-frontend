import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';
import {baseUrl} from '../shared/baseUrl';

//this add comment is a single add cooment using submit comment buttn but addComments are when we are fetching the whole list of comment from server
export const addComment = (dishId , rating , author , comment  )=>({
    type: ActionTypes.ADD_COMMENT,
    payload :{
        dishId : dishId,
        rating : rating,
        author:author,
        comment: comment
    }
});


//Dishesh////
//fetchDishes is a thunk coz it returns  a function
export const fetchDishes = () =>(dispatch)=>{
    dispatch(dishesLoading(true));

    return fetch(baseUrl+'dishes')
            .then(response => response.json())
            .then(dishes=>dispatch(addDishes(dishes)))          
}
export const dishesLoading = () =>({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) =>({
    type : ActionTypes.DISHES_FAILED,
    payload : errmess
});  

export const addDishes = (dishes) =>({
    type : ActionTypes.ADD_DISHES,
    payload: dishes
})


////Comments////
export const fetchComments= () =>(dispatch)=>{

    return fetch(baseUrl+'comments')
            .then(response => response.json())
            .then(comments=>dispatch(addComments(comments)))          
}

export const commentsFailed = (errmess) =>({
    type : ActionTypes.COMMENTS_FAILED,
    payload : errmess
});  

export const addComments = (comments) =>({
    type : ActionTypes.ADD_COMMENTS,
    payload: comments
})


/////Promotions//////
export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});