import * as ActionTypes from './ActionTypes';

export const Comments =(state = {
        errMess:null,
        comments:[] 
        }, action)=>{
    switch(action.type){
        case ActionTypes.ADD_COMMENTS:
            return {...state,errMess: null,comments:action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state,errMess:action.payload,comments:[]};
    
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
           //comment id will be handled by the browser and date is used in the actionCreator
            console.log("Comment: ", comment);
            return {...state,comments :state.comments.concat(comment)};

        default:
            return state;
    }
}