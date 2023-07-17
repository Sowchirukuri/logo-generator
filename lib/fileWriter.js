const fs = require("fs");

function writeFile(content, filename) {
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error("An error occurred while writing the file:", err);
      return;
    }
    console.log(`Generated ${filename}`);
  });
}

module.exports = writeFile;
