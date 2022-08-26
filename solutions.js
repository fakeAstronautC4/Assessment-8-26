function addToZero (numArr) {
    if (numArr.length >= 2){
        for (i = 0; i < numArr.length; i++){
            for (j = i + 1; j < numArr.length; j++){
                if (numArr[i] + numArr[j] == 0){                    
                    return true
                }  
            }   
        }
    } else {
        return false
    } 
}
// console.log(addToZero([]))
// console.log(addToZero([1]))
// console.log(addToZero([1, 2, 3]))
// console.log(addToZero([1, 2, 3, -2]))


function hasUniqueChar (str) {
    let letters = []
    for (i = 0; i < str.length; i++){
        if (letters.includes(str[i])){
            return false
        } else {
            letters.push(str[i])
        } 
        if (letters.length == str.length){
            return true
        }
    } 
}
//==================================================================================
// console.log(hasUniqueChar('Monday'))
// console.log(hasUniqueChar('Moonday'))
//==================================================================================

function isPangram (str) {
    let word = str.toLowerCase()
    let letters = []
    let alphabt = /[a-z]/g
    for (i = 0; i < word.length; i++){
        if(word[i].match(alphabt) && !letters.includes(word[i])){
            letters.push(word[i])
        }
    }
    console.log(letters.length)
    console.log(letters)
    if (letters.length == 26){
        return true   
    } else {
        return false
    }
}
//==================================================================================
// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPangram("I like cats, but not mice"))
//==================================================================================

function findLongestWord(strArr) {
    let longestWord = 0
    for (i = 0; i < strArr.length; i++) {
        if (strArr[i].length >= longestWord) {
            longestWord = strArr[i].length
        }
    }
    console.log(longestWord)
}

//==================================================================================
// findLongestWord(["hi", 'tough stuff this assessment', "hello"])
//==================================================================================

// -------------------   EXTRA CREDIT - SPACE COMPLEXITY  ----------------
// 1. O(1)

// 2. O(1) 

// 3. O(1)

// 4. O(1)
