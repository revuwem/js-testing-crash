import React from "react";
import Counter from "../counter/Counter";

export default function Home() {
  return (
    <div data-testid="page-home">
      <h2>Home</h2>
      <Counter />
    </div>
  );
}
