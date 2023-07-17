const getUserInput = require("../lib/userInput");

describe("getUserInput", () => {
  test("should prompt the user and return input", async () => {
    const mockQuestion = jest.fn().mockImplementationOnce((question, cb) => {
      cb("test");
    });

    const result = await getUserInput();

    expect(result).toEqual({
      text: "test",
      textColor: "test",
      shape: "circle",
      shapeColor: "test",
    });
  });
});
