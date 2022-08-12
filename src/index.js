module.exports = function toReadable (number) {
 
  let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let teens = ['ten', 'eleven', 'twelve', 'thirhteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eigthy', 'ninety'];

  let numberString = number.toString();

  if (number === 0){
    return 'zero';
  }
  if(number < 10) {
    return ones[number];
  }
  if(number >= 10 && number <= 19) {
    return teens[numberString[1]];
  }
  if(number.lenght == 2 && numberString[0] >= 2) {
    return tens[numberString[0]] + ' ' + ones[numberString[1]];
  }
}
