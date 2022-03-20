import { createContext, useReducer } from 'react';

export const GlobalContext = createContext({});
export const GlobalContextProvider = ({ initialState, children, reducer }) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={[globalState, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};
