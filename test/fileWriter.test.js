const fs = require("fs");
const path = require("path");
const writeFile = require("../lib/fileWriter");

jest.mock("fs");

describe("writeFile", () => {
  test("should write the file", () => {
    const content = "test content";
    const filename = "logo.svg";
    const callback = jest.fn();

    writeFile(content, filename);

    expect(fs.writeFile).toHaveBeenCalledWith(
      path.resolve(__dirname, "../", filename),
      content,
      expect.any(Function)
    );
  });

  test("should log an error if writing the file fails", () => {
    const content = "test content";
    const filename = "logo.svg";
    const error = new Error("File write error");

    fs.writeFile.mockImplementationOnce((_, __, cb) => {
      cb(error);
    });

    console.error = jest.fn();

    writeFile(content, filename);

    expect(console.error).toHaveBeenCalledWith(
      "An error occurred while writing the file:",
      error
    );
  });
});
