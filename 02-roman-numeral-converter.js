function convertToRoman(num) {
  const numbers = [3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const roman = ['MMM', 'MM', 'M', 'CM', 'DCCC', 'DCC', 'DC', 'D', 'CD', 'CCC', 'CC', 'C', 'XC', 'LXXX', 'LXX', 'LX', 'L', 'XL', 'XXX', 'XX', 'X', 'IX', 'VIII', 'VII', 'VI', 'V', 'IV', 'III', 'II', 'I'];

  let toRoman = '';
  let m = 0;
  let c = 0;
  let d = 0;
  let u = 0;

  // key idea: subtrating 1000, 100, 10 and 1 from num so that it will be formed with groups of units tens hundreds and thousands

  if(num >= 1000) {
    while (num >= 1000) {
      num -= 1000;
      m += 1000;
    }
    toRoman += roman[numbers.indexOf(m)];
  }
  if(num >= 100 && num < 1000) {
    while (num >= 100) {
      num -= 100;
      c += 100;
    }
    toRoman += roman[numbers.indexOf(c)];
  }
  if(num >= 10 && num < 100) {
    while (num >= 10) {
      num -= 10;
      d += 10;
    }
    toRoman += roman[numbers.indexOf(d)];
  }
  if(num >= 1 && num < 10) {
    while (num >= 1) {
      num -= 1;
      u++;
    }
    toRoman += roman[numbers.indexOf(u)];
  }

  return toRoman;
}

convertToRoman(990);
