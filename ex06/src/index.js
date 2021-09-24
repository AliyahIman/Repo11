// Only change code below this line
function multiplyArrayFunction(myArray){

    myOtherArray = [...myArray];
    var sum = 0;
    var product = 1;
    for(let i = 0; i < myOtherArray.length; i++){
        for(let j = 0; j <myOtherArray[i].length; j++){
            sum = sum + myOtherArray[i][j];
            product = product * myOtherArray[i][j];
        }
    }
    var arr = [product, sum];
    return arr;
}


// Only change code above this line
console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]))
console.log(multiplyArrayFunction([[1, 2], [3, 4, 5, 6], [7, 8, 9]]))
module.exports = multiplyArrayFunction;
