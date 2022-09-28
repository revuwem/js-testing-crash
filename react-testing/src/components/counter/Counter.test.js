import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";
import withStore from "../../helpers/tests/withStore";

describe("Counter", () => {
  it("should increment", () => {
    render(withStore(<Counter />, { counter: { value: 10 } }));
    const incrementBtn = screen.getByRole("button", { name: /\+/i });
    userEvent.click(incrementBtn);
    expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
  });

  it("should decrement", () => {
    render(withStore(<Counter />));
    const decrementBtn = screen.getByRole("button", { name: /\-/i });
    userEvent.click(decrementBtn);
    expect(screen.getByTestId("counter-value")).toHaveTextContent("-1");
  });
});
