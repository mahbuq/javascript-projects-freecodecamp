function rot13(str) {
  // const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'X', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'X', 'Z'];
  const alphabet = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];

  // covert from roq 13
  // 1st: turn string to array, separating every character
  // 2nd: map every character and make conversion
  // 3rd: join letters again to form converted string

  // how conversion works: map letters and check what is the letter index on the alphabet const
  // if the index is -1, that means it is not a letter
  // so it won't be converted, and it will be returned
  // for letters, it will be returned a valid index and to that index it will be added 13
  // with that new index, the map function will return the converted letter
  var cipherConvert = str
    .split('')
    .map(letter => {
      if(alphabet.indexOf(letter) === - 1) {
        return letter;
      }
      else {
        return alphabet[alphabet.indexOf(letter) + 13];
      }
    })
    .join('');
  
  return cipherConvert;
}


//rot13("SERR PBQR PNZC");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");

//output:
//ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
//input:
//NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm
