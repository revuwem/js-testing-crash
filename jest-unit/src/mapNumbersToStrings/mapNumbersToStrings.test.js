const mapNumbersToStrings = require("./mapNumbersToStrings");

describe("should map", () => {
  test("numbers array", () => {
    expect(mapNumbersToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("mixed array", () => {
    expect(mapNumbersToStrings([1, 2, 3, null, "foo", undefined])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });
  test("empty array", () => {
    expect(mapNumbersToStrings([])).toEqual([]);
  });
  test("not numbers array", () => {
    expect(mapNumbersToStrings([1, 2, 3])).not.toEqual([1, 2, 3]);
  });
});
