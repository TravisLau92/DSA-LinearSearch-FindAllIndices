// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function findAllIndices(arr, target) {
  const indices = [];

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === target) {
      indices.push(i);
    }
  }
  return indices;
}

const input = [34, 5, 39, -2, 12, 39, 1, 18, 3, 39, 27, -1, 1000, 32, 4, 9];

const targetElement = 39;

const result = findAllIndices(input, targetElement);

console.log(`Indices of ${targetElement}: [${result}]`);