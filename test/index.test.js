async function generateLogo() {
    const { text, textColor, shape, shapeColor } = await getUserInput();
  
    let shapeInstance;
    switch (shape) {
      case "circle":
        shapeInstance = new Circle();
        break;
      case "triangle":
        shapeInstance = new Triangle();
        break;
      case "square":
        shapeInstance = new Square();
        break;
      default:
        throw new Error("Invalid shape");
    }
  
    shapeInstance.setColor(shapeColor);
  
    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeInstance.render()}
        <text x="150" y="100" text-anchor="middle" fill="${textColor}" font-size="${textSize}">${text}</text>
      </svg>
    `;
  
    writeFile(svgContent, "logo.svg");
  }
  