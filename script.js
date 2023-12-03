function smallestSubarrayWithSum(nums, target) {
    let left = 0; // pointer for the left end of the subarray
    let right = 0; // pointer for the right end of the subarray
    let sum = 0; // current sum of the subarray
    let smallestSubarray = null; // smallest subarray found so far
    let minLength = Infinity; // length of the smallest subarray found so far, initialized to infinity
  
    // keep expanding the window by moving the right pointer to the right
    while (right < nums.length) {
      sum += nums[right]; // add the current element to the sum of the subarray
  
      // if the sum is greater than or equal to the target, we have found a subarray
      while (sum >= target) {
        // check if the current subarray is smaller than the smallest subarray found so far
        if (right - left + 1 < minLength) {
          minLength = right - left + 1; // update the minimum length
          smallestSubarray = [left, right]; // update the smallest subarray
        }
  
        // shrink the window from the left by moving the left pointer to the right
        sum -= nums[left]; // subtract the element at the left end from the sum
        left++; // move the left pointer to the right
      }
  
      // move the right pointer to the right to expand the window
      right++;
    }
  
    // if a smallest subarray was found, return it from the input array, else return an empty array
    return smallestSubarray ? nums.slice(smallestSubarray[0], smallestSubarray[1] + 1) : [];
  }
  
  // Example usage:
  console.log(smallestSubarrayWithSum([2, 1, 5, 2, 3, 2], 7)); // Output: [2, 3]
  console.log(smallestSubarrayWithSum([2, 1, 5, 2, 8], 7)); // Output: [8]
  console.log(smallestSubarrayWithSum([2,1,3,1,1,4],7)); //Output: [2,1,3,1]