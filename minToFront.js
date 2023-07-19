// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it.
// Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.
function minToFront(array) {
    var minIndex = 0;
    for (var i = 1; i < array.length; i++) {
        if(array[i] < array[minIndex]) {
            minIndex = i;
        }
    }
    for (var j = minIndex; j > 0; j--) {
        var temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
    }
    return array;
}

var test1 = minToFront([4, 2, 1, 3, 5]);
console.log(test1)
var test2 = minToFront([45, 28, 115, 3, 51]);
console.log(test10);
