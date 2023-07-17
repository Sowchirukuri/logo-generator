const Square = require("../lib/square");

describe("Square", () => {
  test("should render the square with the given color", () => {
    const square = new Square();
    square.setColor("blue");
    expect(square.render()).toBe(
      '<rect x="50" y="50" width="200" height="200" fill="blue" />'
    );
  });
});
