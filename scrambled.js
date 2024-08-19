function Scrambled(str) {
    let lowerCaseArray = [];
    let upperCaseArray = [];

    for (let char of str) {
        if (char === char.toUpperCase()) {
            upperCaseArray.push(char);
        } else {
            lowerCaseArray.push(char);
        }
    }

    return [[lowerCaseArray.join('')], [upperCaseArray.join('')]];
}


console.log(Scrambled("bridGEON"));  
console.log(Scrambled("SHAMliya"));