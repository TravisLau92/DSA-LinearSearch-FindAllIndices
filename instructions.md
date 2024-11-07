**Title: Find All Occurrences of an Element in Array**

**Objective:**
In this coding exercise, you will create a more complex JavaScript function that searches for all the indices of a specific element in an array. Your function should return an array of indices where the element is found, or an empty array if the element is not present.

For example, when using the following input array:
```js
const input = [34, 5, 39, -2, 12, 39, 1, 18, 3, 39, 27, -1, 1000, 32, 4, 9];
const targetElement = 39;

findAllIndices(input, targetElement);
```

You should be able to produce the following output:
```js
Indices of 39: [2, 5, 9]
```

If the element is not found:
```js
Indices of 2000: []
```

<details>
<summary>Hints</summary>
  
1. Create a function `findAllIndices(arr, target)` that accepts an array `arr` and a target element `target` to search for.
2. Initialize an empty array `indices` to store the indices where the element is found.
3. Use a for loop to iterate through the elements of the array `arr`.
4. Inside the loop, check if the current element is equal to the `target`.
5. If the current element is equal to the `target`, push the current index into the `indices` array.
6. After the loop, console log the `indices` array.
</details>