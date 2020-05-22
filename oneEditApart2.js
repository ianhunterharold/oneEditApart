// oneAway is given two strings *str1* and *str2* and returns a boolean indicating whether
// or not the given strings are one edit away from each other. 

// one edit away from each other or equal
// 

// There are three types of edits that can be performed on a given string:
// 1. Insert
// 2. Remove
// 3. Replace

// Examples:



// oneAway("pale", "bake") -> false
// oneAway("pale", "bale") -> true



function oneAway(str1, str2) {
  // same length
   //compare first values 
    //if they are same, continue 
  //not the same char, 
    // increment out var +1 
    // return true var is less than two 
    let numberOfUpdates = 0;
    
      for (i =0, j=0; i <str1.length; i++, j++){
        if (str1[i] !== str2[j]){
          if (str1.length < str2.length){
            i--
          } else if (str1.length > str2.length){
            j--
          }
          numberOfUpdates += 1;
        }
    }
    return numberOfUpdates <= 1
  
  }
  
  
  // problem solving and making it as clear as possible
  // talk set up, problem solving component
  
  
  
  
  // increment our variable for changes by one with that insert 
  //
  
  
  
  
  
  
  
  
  strOneEx = 'example'
  strTwoEx= 'example'
  
  oneAway(strOneEx,strTwoEx);
  