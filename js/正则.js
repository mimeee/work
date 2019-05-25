let string = "keeekeeekooo";
let pattern = /keee(?=k)/g;
console.log(pattern.test(string))//true
console.log(pattern.lastIndex);//4



console.log(pattern.test(string))//true
console.log(pattern.lastIndex);//8

