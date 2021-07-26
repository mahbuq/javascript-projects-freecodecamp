function telephoneCheck(str) {
  const regex = /^(1\s?)?([0-9]{3}|\([0-9]{3}\))[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/im;
  var checkNumbers = regex.test(str);
  return checkNumbers;
}

telephoneCheck("555-555-5555");


