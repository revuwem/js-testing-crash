import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import withRouter from "../../helpers/tests/withRouter";
import Navbar from "./Navbar";

describe("routing", () => {
  test("should navigate to /", () => {
    render(withRouter(<Navbar />));

    const homeLink = screen.getByTestId("link-home");
    userEvent.click(homeLink);
    expect(screen.getByTestId("page-home")).toBeInTheDocument();
  });

  test("should navigate to /about", () => {
    render(withRouter(<Navbar />));

    const aboutLink = screen.getByTestId("link-about");
    userEvent.click(aboutLink);
    expect(screen.getByTestId("page-about")).toBeInTheDocument();
  });

  test("should navigate to /dashboard", () => {
    render(withRouter(<Navbar />));

    const dashboardLink = screen.getByTestId("link-dashboard");
    userEvent.click(dashboardLink);
    expect(screen.getByTestId("page-dashboard")).toBeInTheDocument();
  });

  test("should navigate to /users", () => {
    render(withRouter(<Navbar />));

    const usersLink = screen.getByTestId("link-users");
    userEvent.click(usersLink);
    expect(screen.getByTestId("page-users")).toBeInTheDocument();
  });
});
