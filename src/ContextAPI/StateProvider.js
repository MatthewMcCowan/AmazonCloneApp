import React, {createContext, useContext, useReducer} from 'react'

// Prepare the Data Layer
export const StateContext = createContext();

// Wrap App and Provide Data Layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={ useReducer( reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Now Pull info Data Layer
export const useStateValue = () => useContext(StateContext);