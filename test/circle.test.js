const Circle = require("../lib/circle");

describe("Circle", () => {
  test("should render the circle with the given color", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toBe(
      '<circle cx="150" cy="100" r="80" fill="blue" />'
    );
  });
});
