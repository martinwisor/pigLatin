function translate(str) {
  let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let input = "";

  if (vowels.indexOf(str[0]) > -1) {
    input = str + "way";
    return input.toLowerCase();
  } else {
    let word = str.match(/[aeiouAEIOU]/g) || 0;
    let vowel = str.indexOf(word[0]);
    input = str.substring(vowel) + str.substring(0, vowel) + "ay";
    return input.toLowerCase();
  }
}

module.exports = { translate };
