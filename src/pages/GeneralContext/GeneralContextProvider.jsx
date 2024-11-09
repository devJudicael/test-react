import generalContext from "./generalContext";

import { useReducer } from "react";

const reducerfn = (state, action) => {
  switch (action.type) {
    case "UPDATE_STATE":
      return state + 1;

    case "DECREMENT_STATE":
      return state - 1;

    default:
      return state;
  }
};

const GeneralContextProvider = (props) => {
  const [myReducer, dispatchMyReducer] = useReducer(reducerfn, 0);

  function increment() {
    dispatchMyReducer({ type: "UPDATE_STATE" });
  }

  function decrement() {
    dispatchMyReducer({ type: "DECREMENT_STATE" });
  }
  return (
    <generalContext.Provider
      value={{
        myReducer,
        increment,
        decrement,
      }}>
      {props.children}
    </generalContext.Provider>
  );
};

export default GeneralContextProvider;
