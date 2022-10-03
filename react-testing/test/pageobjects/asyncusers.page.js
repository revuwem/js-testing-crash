const Page = require("./page");

class AsyncUsersPage extends Page {
  get titleLoading() {
    return $("#users-loading");
  }

  get usersList() {
    return $("#users-list");
  }

  get usersItems() {
    // todo: react selector fails
    // return browser.react$$("Users");
    return $$("[name='user-item']");
  }

  async loadData() {
    try {
      await this.open();
      await this.titleLoading.waitForDisplayed({ timeout: 2000 });
      await this.usersList.waitForDisplayed({ timeout: 2000 });
    } catch (e) {
      throw new Error("Could not load users data");
    }
  }

  async deleteUser() {
    try {
      const usersAmount = await this.usersItems.length;

      if (!usersAmount) throw new Error("Users not found.");

      await this.usersItems[0].$("#user-delete").click();

      const usersAmountNew = await this.usersItems.length;

      const usersDiff = usersAmount - usersAmountNew;
      if (usersDiff == 0) throw new Error("User was not deleted.");
      if (usersDiff > 1) throw new Error("More than one user was deleted.");
    } catch (e) {
      throw new Error("Failed to delete user. " + e.message);
    }
  }

  open() {
    return super.open("users-async");
  }
}

module.exports = new AsyncUsersPage();
