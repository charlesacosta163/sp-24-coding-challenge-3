/*
For this challenge, you are required to write a program that takes an array of integers and a target
sum. The program should determine if there exists a subset of the array whose elements add up to the
target sum.
Requirements:
1. Input an array of integers and a target sum.
2. Output whether there exists a subset of the array elements that adds up to the target sum.
3. If such a subset exists, print out the subset

*/

function subsetSumExists(arr, targetSum) {
    function isSubsetSum(arr, n, targetSum, subset) {
        if (targetSum === 0) {
            console.log("Subset with the given sum exists: ", subset);
            return true;
        }
        if (n === 0 && targetSum !== 0) {
            return false;
        }
        if (arr[n - 1] > targetSum) {
            return isSubsetSum(arr, n - 1, targetSum, subset);
        }
        return (
            isSubsetSum(arr, n - 1, targetSum, subset) ||
            isSubsetSum(arr, n - 1, targetSum - arr[n - 1], [...subset, arr[n - 1]])
        );
    }

    return isSubsetSum(arr, arr.length, targetSum, []);
}

const arr_for_subset = [1,3,5,0,11,17,9,5]
const target_sum = 10

console.log(subsetSumExists(arr_for_subset, target_sum));

/* OUTPUT

Subset with the given sum exists:  [ 9, 1 ]
true

*/