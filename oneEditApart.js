// Write a function that returns whether two words are exactly "one edit”.
// An edit is:
// * Inserting one character anywhere in the word (including at the beginning and end)
// * Removing one character
// * Replacing one character



function OneEditApart(word1, word2) {
    
  if (word1.length - word2.length > 2 || word2.length - word1.length > 2){
    return false;
  } 
  // must be less than 2 .length units apart
  
  if (word1.length !== word2.length){
    let shorter = word1.length < word2.length ? word1: word2;
    let longer = word1.length > word2.length ? word1 : word2;
  
    let count =0;
    for (let i =0, j=0; i < shorter.length;j++, i++){
      if (count >=2){
        return false;
      }
      if (shorter[i] !== longer[j]){
        count++;
        i--;
    
      }
    }
  
  } else if (word1.length === word2.length){
    let sameLengthCount = 0;
  
    for (let k =0; k < word1.length; k++){
      if (sameLengthCount >=2){
        return false;
      }
      if (word1[k] !== word2[k]){
        sameLengthCount++;
      }
    }
  }
  
    return true; 
  }
  
  
  // solve as human 
  // compare the words character by character
  // if there is a missing character, tally a count for an addition or a deletion 
  // if tally goes over one, then return false 
  // if tally is only one return true 
  
  
  // solve as a dev 
  // iterate through the words 
  // if character doesnt match but next one does, 
  // increase tally by one
  // any more mismatches, increase tally by two, 
  // if tally is two+ return false
  
  
  
  // Test cases
  
  console.log(OneEditApart("cat", "dog")) // false
  
  console.log(OneEditApart("cat", "cats")) // true
  
  console.log(OneEditApart("cat", "cut")) // true
  
  console.log(OneEditApart("cat", "cast")) // true
  
  console.log(OneEditApart("cat", "at")) // true
  
  console.log(OneEditApart("cat", "act")) // false
  
  console.log(OneEditApart("dog","dbg")) //true