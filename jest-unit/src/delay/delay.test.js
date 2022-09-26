const delay = require("./delay");

describe("delay", () => {
  test("correct", async () => {
    const sum = await delay(() => 5 + 5, 3000);
    expect(sum).toBe(10);
  });
});
