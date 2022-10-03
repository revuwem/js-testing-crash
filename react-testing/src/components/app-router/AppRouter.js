import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import UserDetails from "../pages/UserDetails";
import Users from "../users/Users";
import HelloWorld from "../pages/HelloWorld";
import UserList from "../async-users/UserList";

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserDetails />} />
      <Route path="/helloworld" element={<HelloWorld />} />
      <Route path="/users-async" element={<UserList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
