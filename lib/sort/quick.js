module.exports = quicksort;

function quicksort (array) {
  return recursiveQuickSort(array, 0, array.length -1);
}

function recursiveQuickSort (array, left, right) {

  console.log("***** RECURSIVE QUICK SORT *****");
  console.log(array);

  if (array.length <= 1) {

    return array;

  } else {

    var index = partition(array, left, right);
    // console.log("index = " + index);

    if (left < index - 1) {
        recursiveQuickSort(array, left, index - 1);
    }

    if (index < right) {
        recursiveQuickSort(array, index, right);
    }

    return array;
  }

}

function partition(array, left, right) {

    console.log("***** PARTITION *****");
    console.log(array);

    var midIndexPtr = Math.floor((left + right)/2);
    console.log("mid index pointer = " + midIndexPtr);
    var pivotValue = array[midIndexPtr];
    console.log("mid index value = " + array[midIndexPtr]);

    while (left < midIndexPtr) {
      // console.log(array);
      while (array[left] < pivotValue) {
        // console.log(array);
        left++;
      }

      while (array[right] > pivotValue) {
        // console.log(array);
        right--;
      }

      if (left <= right) {
        // console.log("left index = " + left);
        // console.log("right index = " + right);
        swap(left, right, array);
        // console.log(array);
        left++;
        right--;
      }
    }
    // console.log(array);
    console.log("left index = " + left);
    console.log("right index = " + right);
    return left;
}


function swap(i, j, array) {

  console.log("***** SWAP *****");
  console.log(array);

  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

var testArray = [20, 92, 193, 24, 1, 0, 39, 10, 12, 239];
var result = quicksort(testArray);
// console.log(result);