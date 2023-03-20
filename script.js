// "Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"
let text="abcadeecfb"
const s=new Set();
for(i=0;i<text.length;i++)
{
   s.add(text[i]);
}
console.log(s);
// "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"
  let text2="abcadeecfb";
      let map = new Map();
      for(let i=0;i < text2.length;i++){
          if(map.has(text2[i])){
              map.set(text2[i],Number(map.get(text2[i]))+1);
          }
          else{
              map.set(text2 [i],1);
          }
      }
      for(const [key,value]of map){
          console.log(key +" = " + value);
      }
