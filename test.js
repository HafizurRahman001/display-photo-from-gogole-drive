// let arr = [];
// const a = '#234';
// for (let i = 0; i < a.length - 1; i++) {
//     arr.push(a.slice(1)[a.length - 1]);
// }
// console.log(`${arr.join('')}`);



let a = ['1', '2', '3', '3', '4'];
const result = [...new Set(a)]
console.log(result);