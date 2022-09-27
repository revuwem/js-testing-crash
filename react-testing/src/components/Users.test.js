import { render, screen } from "@testing-library/react";
import React from "react";
import Users from "./users/Users";
import axios from "axios";

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
  });

  test("should render users", async () => {
    axios.get.mockReturnValue(response);
    render(<Users />);
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(2);
    expect(axios.get).toBeCalledTimes(1);
  });
});
