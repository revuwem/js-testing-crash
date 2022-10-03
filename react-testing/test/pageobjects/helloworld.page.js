const Page = require("./page");

class HelloWorldPage extends Page {
  get btnToggle() {
    return $("#toggler");
  }

  get inputSearch() {
    return $("#search");
  }

  get textHello() {
    return $("#hello");
  }

  async toggleHello(text) {
    await this.inputSearch.setValue(text);
    await this.btnToggle.click();
  }

  open() {
    return super.open("helloworld");
  }
}

module.exports = new HelloWorldPage();
