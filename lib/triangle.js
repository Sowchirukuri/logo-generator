const Shape = require("./shape");

class Triangle extends Shape {
  render() {
    return '<polygon points="150,18 72,182 228,182" fill="${this.color}" />';
  }
}

module.exports = Triangle;
