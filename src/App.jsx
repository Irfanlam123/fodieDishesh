import React from "react";

import Routers from "./router";
import Navbar from "./container/header/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routers />
    </div>
  );
};

export default App;
