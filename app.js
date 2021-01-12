const Palindrome = (word) => {
    let trimmed_word = word.replace(/[\W_]+/g,"").toLowerCase();    
    let reversed_trimmed_word = trimmed_word.split("").reverse().join("");
    if (trimmed_word === reversed_trimmed_word ) {
        return true;
    } else {
        return false;
    }    
}

module.exports = Palindrome;
