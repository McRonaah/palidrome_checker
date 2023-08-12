const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const resultElement = document.getElementById('result');

checkButton.addEventListener('click', () => {
  const num = Number(numberInput.value);
  if (!isNaN(num)) {
    const isPalindromic = isPalindrome(num);
    resultElement.textContent = isPalindromic
      ? `${num} is a palindrome!`
      : `${num} is not a palindrome.`;
  } else {
    resultElement.textContent = 'Please enter a valid number.';
  }
});

function isPalindrome(num) {
  const numStr = num.toString();
  const reversedNumStr = numStr.split('').reverse().join('');
  return numStr === reversedNumStr;
}
