
// 👉 "Find Small, Swap Front, Repeat Till Done!"
// ✍️ Step-by-Step Explanation
// Let's say we have an array:
// [3, 4, 2, 11, 9, 13, 5, 2, 1]

// 1️⃣ Find the smallest number in the array and place it at index 0.

// Smallest number: 1
// Swap 1 with 3 → [1, 4, 2, 11, 9, 13, 5, 2, 3]
// 2️⃣ Find the next smallest in the remaining unsorted part [4, 2, 11, 9, 13, 5, 2, 3].

// Smallest: 2
// Swap with 4 → [1, 2, 4, 11, 9, 13, 5, 2, 3]
// 3️⃣ Keep repeating this process until the entire array is sorted.

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) { // Loop through array
      let mini = i; // Assume the first unsorted element is the smallest
  
      for (let j = i + 1; j < arr.length; j++) { // Find the smallest in remaining array
        if (arr[j] < arr[mini]) {
          mini = j;
        }
      }
  
      // Swap only after finding the smallest
      let temp = arr[i];
      arr[i] = arr[mini];
      arr[mini] = temp;
    }
    console.log(`sorted are after selection sort ${arr}`);
  }
  
  let arr = [3, 4, 2, 11, 9, 13, 5, 2, 1];
  console.log(`unsorted array are ${arr}`)
  selectionSort(arr);


  


