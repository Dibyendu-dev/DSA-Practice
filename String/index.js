let names = "naman";

// console.log(names.length);
// console.log(names.slice(2,5))
// console.log(names.slice(-6,-3))
// console.log(names.substring(2,5))
// console.log(names.concat(" ","das"," u","_are"," ","great"))

// print each char in new line
// for(i=0; i<=names.length-1;i++){
//     console.log(names[i]+ "->" +i);

// }
// console.log("-----")

//  print in reverse order in new line
// for(i=names.length-1;i>=0;i--){
//     console.log(names[i]+ "->" +i);
// }

//print in reverse order and palindrome
// let rev =''
// for(let i=names.length-1; i>=0;i--){
//     rev= rev + names[i]
// }
// (rev ===names)?console.log("palindrome"):console.log("not palindrome")

// let i = 0;
// let j = names.length - 1;
// let isPalindrome = true;

// while (i < j) {
//   if (names[i] != names[j]) {
//     isPalindrome = false;
//     break;
//   }
//   i++;
//   j--;
// }
// isPalindrome ? console.log("palindrome") : console.log("not palindrome");

//toggle a string
let s = "DasDibyendu"
console.log(s);
let toggle="";
for(let i=0;i<=s.length-1;i++){
  

  if(s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90){
    toggle=toggle+ String.fromCharCode(s.charCodeAt(i)+32)
  }else if (s.charCodeAt(i)>=97 && s.charCodeAt(i)<=122){
    toggle=toggle+ String.fromCharCode(s.charCodeAt(i)-32)
  }
}
console.log(toggle)