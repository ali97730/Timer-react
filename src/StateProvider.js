import React,{useReducer,useContext, createContext} from "react";
//creating our StateContext
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    // providing the statecontext Provider with the value it accepts the reducer and Initial state
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* any component under this will be accessible to the StateContext */}
        {children}
    </StateContext.Provider>
)
//creating a variable useStateValue which will use Our context
export const useStateValue = () => useContext(StateContext);