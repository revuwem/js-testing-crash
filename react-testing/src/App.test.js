import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("routing", () => {
  test("router should navigate through pages", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const homeLink = screen.getByTestId("link-home");
    const aboutLink = screen.getByTestId("link-about");
    const dashboardLink = screen.getByTestId("link-dashboard");

    // home page
    userEvent.click(homeLink);
    expect(screen.getByTestId("page-home")).toBeInTheDocument();
    // about page
    userEvent.click(aboutLink);
    expect(screen.getByTestId("page-about")).toBeInTheDocument();
    // dashboard page
    userEvent.click(dashboardLink);
    expect(screen.getByTestId("page-dashboard")).toBeInTheDocument();
  });

  test("router should navigate to Not Found page", () => {
    render(
      <MemoryRouter initialEntries={["/404"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId("page-not-found")).toBeInTheDocument();
  });
});
