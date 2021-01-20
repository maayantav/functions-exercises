//Question 1
function myReverse(str) {
  // your code here
  let revStr = str.split("").reverse().join("");
  return revStr;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  // your code here
  let newStr = "";
  let i, j;
  for (i = 0; i < str.length; i++)
  {
    for (j = i; j < str.length; j++)
    {
      newStr += str[j];
      combinations.push(newStr);
    }
    newStr = "";
  }
  return combinations;
}

//Question 3
function allCaps(str) {
  // your code here
  let words = str.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }
  str = words.join(' ');
  return str;
}

//Question 4
function myPower(x, n) {
  // your code here
  let power = 1;
  for (let i = 0; i < n; i++)
  {
    power = power * x;
  }
  return power;
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  for (let i = 0; i < str.length; i++) 
  {
    let char = str[i];
    if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) 
    {
      return char;
    }
  }
  return "_";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own
console.log(getFirstNotRepeating("my mane is maayan"));
// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;

