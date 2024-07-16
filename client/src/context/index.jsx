import { createContext } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
}

GlobalState.propTypes = {
  children: PropTypes.object,
};
