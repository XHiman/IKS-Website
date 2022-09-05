import { createContext, useReducer } from "react";

export const VruttaContext = createContext();

export const vruttaReducer = (state, action) => {
  switch (action.type) {
    case "SET_VRUTTA":
      return {
        vrutta: action.payload,
      };
    case "CREATE_VRUTTA":
      return {
        vrutta: [action.payload, ...state.vrutta],
      };
    default:
      return state;
  }
};

export const VruttaContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(vruttaReducer, {
    vrutta: null,
  });

  return (
    <VruttaContext.Provider value={{ ...state, dispatch }}>
      {children}
    </VruttaContext.Provider>
  );
};
