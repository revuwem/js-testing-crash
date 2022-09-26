const validateValue = require("./validateValue");

test("should validate", () => {
  expect(validateValue(50)).toBe(true);
});

describe("should validate", () => {
  test("medium correct", () => {
    expect(validateValue(50)).toBe(true);
  });

  test("less then correct", () => {
    expect(validateValue(-1)).toBe(false);
  });

  test("more then correct", () => {
    expect(validateValue(101)).toBe(false);
  });

  test("correct bottom edge", () => {
    expect(validateValue(0)).toBe(true);
  });

  test("correct top edge", () => {
    expect(validateValue(100)).toBe(true);
  });
});
