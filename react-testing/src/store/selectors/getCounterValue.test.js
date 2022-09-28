import getCounterValue from "./getCounterValue";

describe("getCounterValue", () => {
  it("should work with empty state", () => {
    expect(getCounterValue({})).toEqual(0);
  });

  it("should work with filled state", () => {
    expect(
      getCounterValue({
        counter: {
          value: 100,
        },
      })
    ).toEqual(100);
  });
});
