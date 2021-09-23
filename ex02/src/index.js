// Create an array here

var temps = [ 
[31, 32, 19, 37], 
[29, 27, 55, 36],
[17, 27, 42, 46],
[29, 52, 21, 64],
[91, 27, 31, 64]
];

// End of creating an array

function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];
        // Only change code below this line
        
        var sum = 0;

        for (var xx = 0; xx < 5; xx++) {

            sum = 0;

                for (var i = 0; i < 4; i++) {
                sum += newTemps[xx][i];
                }

                sum = sum/4;
                averageDayTemp.push(sum);
            }


        // Only change code above this line
    return averageDayTemp;

}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;

