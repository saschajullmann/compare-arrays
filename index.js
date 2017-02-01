function compare(element, index, array) {
  if (element !== this.arr2[index]) {
        this.arr3.push(index)
  }
};

function compareArrays(arr1, arr2) {
  this.arr1 = arr1;
  this.arr2 = arr2;
  const arr3 = [];
  this.arr3 = arr3;
  arr1.forEach(compare, this);
  return arr3;
};

module.exports = compareArrays;
