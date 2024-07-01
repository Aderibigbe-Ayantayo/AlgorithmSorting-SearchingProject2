function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        
        // Shift elements of arr[0..i-1], that are greater than current, to one position ahead
        // of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insert the current element into its correct position
        arr[j + 1] = current;
    }
    
    return arr;
}

// Example usage:
let arr = [99, 20, 77, 6, 98];
console.log("Original array:", arr);
let sortedArr = insertionSort(arr);
console.log("Sorted array:", sortedArr);
