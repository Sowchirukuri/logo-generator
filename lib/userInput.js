const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

async function getUserInput() {
  const text = await prompt("Enter up to three characters for the logo: ");

  const textColor = await prompt("Enter the text color: ");

  const shapeOptions = ["circle", "triangle", "square"];
  let shapeIndex = -1;
  while (shapeIndex < 0 || shapeIndex >= shapeOptions.length) {
    const shapeInput = await prompt(
      `Enter the shape (${shapeOptions.join(", ")}): `
    );
    shapeIndex = shapeOptions.findIndex(
      (option) => option.toLowerCase() === shapeInput.toLowerCase()
    );
  }
  const shape = shapeOptions[shapeIndex];

  const shapeColor = await prompt(`Enter the shape color: `);

  rl.close();

  return {
    text,
    textColor,
    shape,
    shapeColor,
  };
}

module.exports = getUserInput;
