// function LongestWord(sen) { 
//     let senSplit = sen.split(' ');
//     let longestWord = 0;
//     for (let i = 0; i< senSplit.length; i++){
//         if(senSplit[i].length > longestWord){
//             longestWord = senSplit[i].length;
//         }
//     }
//   return longestWord; 
// }

// // keep this function call here 
// console.log(LongestWord("This is a coding test"));

function LongestWord(sen) {
    let str = sen.split(" ");
    let longestWord = 0;
    let word = null;
    str.forEach(function(str) {
        if (longestWord < str.length) {
            longestWord = str.length;
            word = str;
        }
    });
    return word;
}

console.log(LongestWord("This is a coding test"));