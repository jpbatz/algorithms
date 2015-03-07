var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var quicksort = require('..').Sort.quick;

describe('quicksort', function () {

  it('it should sort an array with nothing in it', function () {
    var array = [];
    var sortedArray = quicksort(array);
    expect(sortedArray).to.deep.equal([]);
  });

  it('should sort an array with a single element in it', function () {
    var array = [1];
    var sortedArray = quicksort(array);
    expect(sortedArray).to.deep.equal([1]);
  });

  it('should sort an array with a an even number of elements in it', function () {
    var array = [2, 1];
    var sortedArray = quicksort(array);
    expect(sortedArray).to.deep.equal([1, 2]);
  });

  it('should sort a sorted array with a an even number of elements in it', function () {
    var array = [1, 2];
    var sortedArray = quicksort(array);
    expect(sortedArray).to.deep.equal([1, 2]);
  });

  it('should sort an array with a an odd number of elements in it', function () {
    var array = [2, 3, 1];
    var sortedArray = quicksort(array);
    expect(sortedArray).to.deep.equal([1, 2, 3]);
  });

  it('should sort a sorted array with a an odd number of elements in it', function () {
    var array = [1, 2, 3];
    var sortedArray = quicksort(array);
    expect(sortedArray).to.deep.equal([1, 2, 3]);
  });

  it('should sort a sorted array with many elements in it', function () {
    var array = [20, 92, 193, 24, 1, 0, 39, 10, 12, 239];
    var sortedArray = quicksort(array);
    expect(sortedArray).to.deep.equal([0, 1, 10, 12, 20, 24, 39, 92, 193, 239]);
  });

  it('should sort a sorted array with negative values in it', function () {
    var array = [20, 92, 193, 24, 1, 0, -39, 10, 12, -239];
    var sortedArray = quicksort(array);
    expect(sortedArray).to.deep.equal([-239, -39, 0, 1, 10, 12, 20, 24, 92, 193]);
  });

  it('should sort a sorted array with duplicate values in it', function () {
    var array = [24, 92, 193, 24, 1, 0, -39, 10, 24, -239];
    var sortedArray = quicksort(array);
    expect(sortedArray).to.deep.equal([-239, -39, 0, 1, 10, 24, 24, 24, 92, 193]);
  });

});
