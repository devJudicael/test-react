import { createContext } from "react";

const generalContext = createContext({
  myReducer: 0,
  increment: () => {},
  decrement: () => {},
});

export default generalContext;
