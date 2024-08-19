function uniqueCharacters(str) {
    // Convert the string to lowercase to ignore case differences
    str = str.toLowerCase();
    
    // Create a set to keep track of seen characters
    let seen = new Set();
    
    // Iterate over each character in the string
    for (let char of str) {
        if (seen.has(char)) {
            return false;  // Duplicate found
        }
        seen.add(char);
    }
    
    return true;  // All characters are unique
}

// Example usage:
console.log(uniqueCharacters("abcdeA"));  // Output: false
console.log(uniqueCharacters("bridgeon"));  // Output: true
console.log(uniqueCharacters("1212"));  // Output: false