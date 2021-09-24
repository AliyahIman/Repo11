// Create a monitorsListArray array here

var monitorsListArray = ["Apple", 1, "Peach", "Berry"];

// End of monitorsListArray array

function myMonitorsFunction(arr){

    var theMonitorsList = [...arr];
    // Only change code below this line

    var monitorsList = [];
    for(let i = 0; i < theMonitorsList.length; i++){
        monitorsList.push(theMonitorsList[i]);
        monitorsList.push(i+1);
    }
    return monitorsList;

    // Only change code above this line
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;
