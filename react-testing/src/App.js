import React from "react";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./components/app-router/AppRouter";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <AppRouter />
    </div>
  );
};

export default App;
