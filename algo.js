function isLeapYear(year) {
    // Check if the given year is a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

// Test the leap year function
console.log(isLeapYear(2024)); // 2024 is a leap year.
console.log(isLeapYear(1900)); // 1900 is not a leap year.
console.log(isLeapYear(2000)); // 2000 is a leap year.

function getTicketPrice(age) {
    // Determine the ticket price based on age
    if (age <= 12) {
        return 'The ticket price is $10.';
    } else if (age >= 13 && age <= 17) {
        return 'The ticket price is $15.';
    } else {
        return 'The ticket price is $20.';
    }
}

// Test the ticket price function
console.log(getTicketPrice(10)); // The ticket price is $10.
console.log(getTicketPrice(16)); // The ticket price is $15.
console.log(getTicketPrice(25)); // The ticket price is $20.

function clothingAdvice(temperature, isRaining) {
    // Provide clothing advice based on temperature and rain status
    if (temperature < 15 && isRaining) {
        return 'Wear a warm coat and a raincoat.';
    } else if (temperature < 15) {
        return 'Wear a warm coat.';
    } else if (temperature >= 15 && isRaining) {
        return 'Wear light clothing and a raincoat.';
    } else {
        return 'Wear light clothing.';
    }
}

// Test the clothing advice function
console.log(clothingAdvice(10, true)); // Wear a warm coat and a raincoat.
console.log(clothingAdvice(20, false)); // Wear light clothing.
console.log(clothingAdvice(18, true)); // Wear light clothing and a raincoat.

function fibonacci(n) {
    // Recursive function to compute the nth Fibonacci number
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test the Fibonacci function
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55

function isPalindrome(str) {
    // Remove spaces, punctuation, and convert to lowercase
    let cleanedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

    // Recursive function to check if cleanedStr is a palindrome
    function checkPalindrome(cleanedStr, start, end) {
        if (start >= end) {
            return true;
        }
        if (cleanedStr[start] !== cleanedStr[end]) {
            return false;
        }
        return checkPalindrome(cleanedStr, start + 1, end - 1);
    }

    return checkPalindrome(cleanedStr, 0, cleanedStr.length - 1);
}

// Test the palindrome function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello, World!")); // false

function power(base, exponent) {
    // Recursive function to compute base raised to the exponent
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

// Test the power function
console.log(power(2, 3)); // 8
console.log(power(5, 2)); // 25
console.log(power(3, 0)); // 1
