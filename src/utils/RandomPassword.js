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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

