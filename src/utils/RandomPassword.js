export class RandomPassword {
  constructor() {
    this.characters = "";
  }
  setLength(length) {
      this.length = length;
      return this;
  }
  setUpperCase(isUpperCase) {
    if (isUpperCase) {
      this.characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    return this;
  }
  setLowerCase(isLowerCase) {
    if (isLowerCase) {
      this.characters += "abcdefghijklmnopqrstuvwxyz";
    }
    return this;
  }
  setNumberCase(isNumeric) {
    if (isNumeric) {
      this.characters += "0123456789";
    }
    return this;
  }
  setSymbol(isSymbolic) {
    if (isSymbolic) {
      this.characters += "!@$%^&*()<>,.?/[]{}-=_+";
    }
    return this;
  }
  generate() {
    let characterList = this.characters;
    if (characterList.length <= 0) {
      return "May'be you're in search of unknown! Keep looking";
    }
    var password = "";
    for (let i = 0; i < this.length; ++i) {
      password += characterList[getRandomInt(0, characterList.length - 1)];
    }
    return password;
  }
}

/**
  Generate random value using webcrypto instead of Math.random() which is least secure than webcrypto itself
  https://stackoverflow.com/questions/18230217/javascript-generate-a-random-number-within-a-range-using-crypto-getrandomvalues
**/
function cryptoRandom() {
  const randomBuffer = new Uint32Array(1);
  (window.crypto || window.msCrypto).getRandomValues(randomBuffer);
  return ( randomBuffer[0] / (0xffffffff + 1) );
}

function getRandomInt(min, max) {
  return Math.floor(cryptoRandom() * (Math.ceil(max) - Math.floor(min) + 1)) + min;
}
