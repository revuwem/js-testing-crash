import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import App from "./App";

describe("App", () => {
  test("should render all elements", () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/hello world/i);
    expect(helloWorldElement).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    const input = screen.getByPlaceholderText(/type something/i);
    expect(input).toBeInTheDocument();
    // screen.debug();
    expect(input).toMatchSnapshot();
  });

  test("should not render 'hello2'", () => {
    render(<App />);
    const unwantedElement = screen.queryByText(/hello world2/i);
    expect(unwantedElement).toBeNull();
  });

  test("should render data container", async () => {
    render(<App />);
    const dataContainer = await screen.findByText(/data/i);
    expect(dataContainer).toBeInTheDocument();
    expect(dataContainer).toHaveStyle({ color: "red" });
  });

  test("toggle button should toggle", () => {
    render(<App />);
    const toggleBtn = screen.getByTestId("toggle-btn");
    expect(screen.queryByTestId("toggle-info")).toBeNull();
    fireEvent.click(toggleBtn);
    expect(screen.queryByTestId("toggle-info")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.queryByTestId("toggle-info")).toBeNull();
  });

  test("input value should change", () => {
    render(<App />);
    const inputValue = "something";
    const input = screen.getByPlaceholderText(/type something\.\.\./i);
    expect(screen.queryByTestId("input-value")).toContainHTML("");

    // fires explicit event
    // fireEvent.input(input, { target: { value: "something" } });

    // imitates user behaviour
    userEvent.type(input, inputValue);
    expect(screen.queryByTestId("input-value")).toContainHTML(inputValue);
  });
});
