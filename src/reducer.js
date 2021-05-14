//initial state will have our array of objects 

export const initialState = {
    list: []
};

//this is the action we want to call to add the time to the context
export const actionTypes ={
    ADD_TIME:"ADD_TIME",
  
}

const reducer = (state, action) => {
    
    switch(action.type){
        case actionTypes.ADD_TIME:
            //when the action is called we want to load our existing list so used spread operator and
            //assign a new list item from action.list
            return {
                ...state,
                list: [...state.list, action.list]
                
            } 
        default :
           return state;
    }
}

export default reducer;

