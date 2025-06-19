var password = prompt("Enter your password:");
var isLengthValid = password.length >= 6;
var firstChar = password.charAt(0);
var startsWithAlphabet = isNaN(firstChar);  // true if not a number
var hasAlphabet = /[a-zA-Z]/.test(password);
var hasNumber = /[0-9]/.test(password);
if (isLengthValid && startsWithAlphabet && hasAlphabet && hasNumber) {
    alert("Password is valid!");
} else {
    alert("Enter a valid password.\nIt must:\n- Be at least 6 characters\n- Contain letters and numbers\n- Password cannt begin with a number");
}