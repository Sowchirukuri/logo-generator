const Shape = require("../lib/shape");

describe("Shape", () => {
  test("should set the color", () => {
    const shape = new Shape();
    shape.setColor("blue");
    expect(shape.color).toBe("blue");
  });

  test("should render the shape", () => {
    const shape = new Shape();
    expect(shape.render()).toBeUndefined();
  });
});
