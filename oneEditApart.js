// Write a function that returns whether two words are exactly "one edit”.
// An edit is:
// * Inserting one character anywhere in the word (including at the beginning and end)
// * Removing one character
// * Replacing one character



function OneEditApart(word1, word2) {
 
 if (word1 === word2) return true
 if (Math.abs(word1.length - word2.length) > 1) return false
 
 const [shorter, longer] = word1.length < word2.length ? [word1, word2] : [word2, word1]
 
 let edits = 0
 let shorterIdx = 0
 let longerIdx = 0
 
 while (longerIdx < longer.length) {
   if (longer.length !== shorter.length) {
     if (longer[longerIdx] !== shorter[shorterIdx]) {
       edits++
       if (edits > 1) return false
       longerIdx++
     } else {
       longerIdx++
       shorterIdx++
     }
   } else {
     if (longer[longerIdx] !== shorter[shorterIdx]) {
       edits++
       if (edits > 1) return false
     }
     longerIdx++
     shorterIdx++
   }
 }
  return true
}


// Test cases

console.log(OneEditApart("cat", "dog")) // false
console.log(OneEditApart("cat", "cats")) // true
console.log(OneEditApart("cat", "cut")) // true
console.log(OneEditApart("cat", "cast")) // true
console.log(OneEditApart("cat", "at")) // true
console.log(OneEditApart("cat", "act")) // false