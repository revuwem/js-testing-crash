import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Dashboard from "./components/pages/Dashboard";
import NotFound from "./components/pages/NotFound";

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

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
