function palindrome(str) {
  var newArr = [];

  // make string lower case
  var strLower = str.toLowerCase();
  
  // remove all non-alphanumeric characters
  const regex = /[a-z0-9]/gi;
  var justLetters = strLower.match(regex);
  //return justLetters;
  // turn str to arr and reverse it
  var reverse = justLetters.map(letter => newArr.unshift(letter));
  // turn arr back to str
  var newStr = newArr.join('');
  //return newStr;
  // check if it is palindrome
  if(newStr === justLetters.join('')) {
    return true;
  } else {
    return false;
  }
}


palindrome("_eye");