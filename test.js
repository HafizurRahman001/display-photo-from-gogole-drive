// let arr = [];
// const a = '#234';
// for (let i = 0; i < a.length - 1; i++) {
//     arr.push(a.slice(1)[a.length - 1]);
// }
// console.log(`${arr.join('')}`);



const a = [1, 1, 2]

const final = [...new Set(a)]
console.log(final);