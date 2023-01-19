/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  let newStr1 = str1.split("").sort().join();
  let newStr2 = str2.split("").sort().join();
  if (newStr1 === newStr2) return true;
}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
console.log(isAnagram("angel", "gleane"));

/*
  if (str1.length !== str2.length) {
    return false;
  } else if (
    str1.split(" ").sort().join(" ") != str2.split(" ").sort().join(" ")
  ) {
    console.log(str1.split(" ").sort().join(" "))
    return false;
  } else {
    return true;
  }

*/
