class Shape {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      // This method should be overridden by the child classes
    }
  }
  
  module.exports = Shape;
  