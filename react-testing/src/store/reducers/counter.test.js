import counterReducer, { incremented, decremented } from "./counter";

describe("counter reducer", () => {
  it("should increment", () => {
    expect(counterReducer({ value: 0 }, incremented())).toEqual({ value: 1 });
  });

  it("should decrement", () => {
    expect(counterReducer({ value: 0 }, decremented())).toEqual({ value: -1 });
  });

  it("should work with empty state", () => {
    expect(counterReducer(undefined, incremented())).toEqual({ value: 1 });
    expect(counterReducer(undefined, decremented())).toEqual({ value: -1 });
  });
});
