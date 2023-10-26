class GuessingGame {
    constructor() {
      this.minRange = null;
      this.maxRange = null;
      this.currentGuess = null;
    }
  
    setRange(min, max) {
      this.minRange = min;
      this.maxRange = max;
    }
  
    guess() {
      this.currentGuess = Math.round((this.minRange + this.maxRange) / 2);
      return this.currentGuess;
    }
  
    lower() {
      this.maxRange = this.currentGuess;
    }
  
    greater() {
      this.minRange = this.currentGuess;
    }
  }

module.exports = GuessingGame;
