const AsyncUsersPage = require("../pageobjects/asyncusers.page");

describe("Users async page", () => {
  it("should load data", async () => {
    await AsyncUsersPage.loadData();
  });

  it("should delete user", async () => {
    await AsyncUsersPage.loadData();
    await AsyncUsersPage.deleteUser();
  });
});
