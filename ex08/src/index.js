// Only change code below this line
function myMutation(arr) {

    var alphabetletters = arr[0].toLowerCase();
    var allletters = arr[1].toLowerCase();

    for(let i = 0; i < allletters.length; i++){
        if(alphabetletters.includes(allletters[i]) == false){
            return false;
        }
    }
    return true;
}

// Only change code above this line

console.log(myMutation(["Alien", "line"]));
module.exports = myMutation;
