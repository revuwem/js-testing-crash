import React from "react";
import { Link } from "react-router-dom";
import AppRouter from "./components/app-router/AppRouter";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/" data-testid="link-home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" data-testid="link-about">
            About
          </Link>
        </li>
        <li>
          <Link to="/dashboard" data-testid="link-dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/users" data-testid="link-users">
            Users
          </Link>
        </li>
      </ul>

      <hr />

      <AppRouter />
    </div>
  );
};

export default App;
