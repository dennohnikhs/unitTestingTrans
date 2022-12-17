const assert = require("chai").assert;
const app = require("../app");
// const sayHello = require("../app").sayHello;
// const addNumbers = require("../app").addNumbers;
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5, 5);
describe("sayHello", () => {
  it("sayHello should return hello", () => {
    assert.equal(sayHelloResult, "hello");
  });
  it("sayHello should return type string", () => {
    assert.typeOf(sayHelloResult, "string");
  });
});
describe("addNumbers", () => {
  it("numbers should be above 5", () => {
    assert.isAbove(addNumbersResult, 5);
  });
  it("add numbers should return type number", () => {
    assert.typeOf(addNumbersResult, "number");
  });
});
