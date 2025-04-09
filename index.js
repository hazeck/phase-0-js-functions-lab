function calculateTax (amount) {
    const taxRate = 0.1;
    return amount * taxRate;
}

function convertToUpperCase (text) {
    return text.toUpperCase();
}

function findMaximum (num1, num2) {
    return Math.max(num1, num2);
}            

function isPalindrome (word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

function calculateDiscountedPrice (originalPrice, discount) {
    return originalPrice - (originalPrice * (discount / 100));
}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };