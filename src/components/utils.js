function randomNumber(min, max) {
    const num = Math.random() * (max - min + 1) + min;
    return Math.floor(num);
  }
  
  /**
   * Generate random hex number for color
   */
  function randomHexNumber() {
    let hex = randomNumber(0, 255).toString(16);
    if (hex.length === 1) {
      hex = "0" + hex;
    }
    return hex;
  }
  
  
  export function randomHexColor() {
    const red = randomHexNumber();
    const green = randomHexNumber();
    const blue = randomHexNumber();
  
    return ("#" + red + green + blue).toUpperCase();
  }
  