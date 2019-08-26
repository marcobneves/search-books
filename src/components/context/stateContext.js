import React, {createContext, useContext, useReducer} from 'react';

//** Created context */
export const StateContext =  React.createContext([{}, () => {}]);

/** Export provider */
export const StateProvider = ({reducer, initialState, children}) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);