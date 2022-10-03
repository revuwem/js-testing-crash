const HelloWorldPage = require("../pageobjects/helloworld.page");

describe("Hello World page", () => {
  it('should toggle hello text when input value is "Hello World"', async () => {
    await HelloWorldPage.open();
    await expect(HelloWorldPage.textHello).toBeExisting();
    await HelloWorldPage.toggleHello("Hello World");
    await expect(HelloWorldPage.textHello).not.toBeExisting();
    await HelloWorldPage.btnToggle.click();
    await expect(HelloWorldPage.textHello).toBeExisting();
  });

  it('should not toggle hello text when input value is not "Hello World"', async () => {
    await HelloWorldPage.open();
    await expect(HelloWorldPage.textHello).toBeExisting();
    await HelloWorldPage.toggleHello("Hello");
    await expect(HelloWorldPage.textHello).toBeExisting();
    await HelloWorldPage.btnToggle.click();
    await expect(HelloWorldPage.textHello).toBeExisting();
  });
});
