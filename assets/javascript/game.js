//DOCUMENT READY
$(document).ready(function() {

//========================================================================================================================
//VARIABLES
//========================================================================================================================

    var totalWin;
    var totalLoss;
    var targetNum;
    var userNum;
    var userNumArr = [];
    var crystalNum1;
    var crystalNum2;
    var crystalNum3;
    var crystalNum4;







//========================================================================================================================
//FUNCTIONS
//========================================================================================================================

    //Generates Random Between Set Min and Max Value
    function getRandomNum(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }

    //Sets value for TargetNum and each CrystalNum
    function getRoundValue(){
        targetNum = getRandomNum(19, 120);
        $(".targetScore").text(targetNum);
        crystalNum1 = getRandomNum(1, 12);
        crystalNum2 = getRandomNum(1, 12);
        crystalNum3 = getRandomNum(1, 12);
        crystalNum4 = getRandomNum(1, 12);
    }










//========================================================================================================================
// PLAY GAME
//========================================================================================================================


getRoundValue();
console.log(targetNum);
console.log(crystalNum1);
console.log(crystalNum2);
console.log(crystalNum3);
console.log(crystalNum4);





});