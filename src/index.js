module.exports = function toReadable (number) {
 
  let ones = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let numberString = number.toString();

  if (number === 0){
    return 'zero';
  }
  if(number < 10) {
    return ones[number];
  }
  if(number >= 10 && number <= 19) {
    return (teens[numberString[1]]).trim();
  }

  if(numberString.length === 2 && numberString[0] >= 2){
    return (tens[numberString[0]]  + ' ' + ones[numberString[1]]).trim();
  }
  if(numberString.length === 3) {
    if(numberString[1] == 0 && numberString[2] == 0) {
      return (ones[numberString[0]] + ' hundred ').trim();
    } else if(numberString[1] == 0) {
      return (ones[numberString[0]] + ' hundred ' + ones[numberString[2]]).trim();
    }else if (numberString[1] == 1) {
      return (ones[numberString[0]] + ' hundred ' + teens[numberString[2]]).trim();
    } else {
      return (ones[numberString[0]] + ' hundred ' + tens[numberString[1]] + ' ' + ones[numberString[2]]).trim();
    }
  }
  
}
