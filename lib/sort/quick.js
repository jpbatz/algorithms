module.exports = quicksort;

function quicksort (array, left, right) {

  var index;

  if (array.length > 1) {

    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? array.length-1 : right;

    index = partition(array, left, right);

    if (left < index - 1) {
        quicksort(array, left, index - 1);
    }

    if (index < right) {
        quicksort(array, index, right);
    }
  }
  return array;
}


function partition(array, left, right) {

    var midIndexPtr = Math.floor((left + right)/2);
    var pivotValue = array[midIndexPtr];

    i = left;
    j = right;

    while (i <= j) {

      while (array[i] < pivotValue) {
        i++;
      }

      while (array[j] > pivotValue) {
        j--;
      }

      if (i <= j) {
        swap(array, i, j);
        i++;
        j--;
      }
    }
    return i;
}


function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
