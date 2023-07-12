const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const eNum = [];
const oNum = [];
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    eNum.push(i);
  } else {
    oNum.push(i);
  }
}
console.log("Even numbers:", eNum);
console.log("Odd numbers:", oNum);
