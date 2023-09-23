import React from "react";

const ToggleContext = React.createContext({
  toggleNav: false,
  handletoggle: () => {},
});

export default ToggleContext;
