const Triangle = require("../lib/triangle");

describe("Triangle", () => {
  test("should render the triangle with the given color", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toBe(
      '<polygon points="150,18 72,182 228,182" fill="blue" />'
    );
  });
});
