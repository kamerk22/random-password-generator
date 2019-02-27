export const generateRandom = function(legth) {
  const RandomPassword = function() {
    this.characters = "";
  };
  RandomPassword.prototype.setUpperCase = function(isUpperCase) {
    if (isUpperCase) {
      this.characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    return this;
  };
  RandomPassword.prototype.setLowerCase = function(isLowerCase) {
    if (isLowerCase) {
      this.characters += "abcdefghijklmnopqrstuvwxyz";
    }
    return this;
  };
  RandomPassword.prototype.setNumberCase = function(isNumeric) {
    if (isNumeric) {
      this.characters += "0123456789";
    }
    return this;
  };
  RandomPassword.prototype.setSymbol = function(isSymbolic) {
    if (isSymbolic) {
      this.characters += "!@$%^&*()<>,.?/[]{}-=_+";
    }
    return this;
  };
  RandomPassword.prototype.generate = function() {
    let characterList = this.characters;
    if(characterList.length <= 0) {
        return "May'be you're in search of unknown! Keep looking";
    }
    var password = "";

    for (let i = 0; i < legth; ++i) {
      password += characterList[getRandomInt(0, characterList.length - 1)];
    }
    return password;
  };
  return new RandomPassword();
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
