import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Users from "./Users";
import axios from "axios";
import withRouter from "../../helpers/tests/withRouter";

jest.mock("axios");

describe("Users", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
      ],
    };

    axios.get.mockReturnValue(response);
  });

  afterEach(() => jest.clearAllMocks());

  test("should render users", async () => {
    render(withRouter(<Users />));
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(2);
    expect(axios.get).toBeCalledTimes(1);
  });

  test("should redirect to user details page", async () => {
    render(withRouter(null, "/users"));
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(2);
    userEvent.click(users[0]);
    expect(screen.getByTestId("page-user-details")).toBeInTheDocument();
  });
});
