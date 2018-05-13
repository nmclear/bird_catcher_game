//DOCUMENT READY
$(document).ready(function() {

//========================================================================================================================
//VARIABLES
//========================================================================================================================

    var totalWin = 0;
    var totalLoss = 0;
    var userNum = 0;
    var targetNum;
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
        //Generate target number and display targetScore
            targetNum = getRandomNum(19, 120);
            $(".targetScore").text(targetNum);
        //Generate crystal numbers
            crystalNum1 = getRandomNum(1, 12);
            crystalNum2 = getRandomNum(1, 12);
            crystalNum3 = getRandomNum(1, 12);
            crystalNum4 = getRandomNum(1, 12);
        //Set crystalButton values
            $("#crystalButton1").attr("value", crystalNum1);
            $("#crystalButton2").attr("value", crystalNum2);
            $("#crystalButton3").attr("value", crystalNum3);
            $("#crystalButton4").attr("value", crystalNum4);
        //Set userScore to 0 and display userScore
            userNum = 0;    
            $(".userScore").text(userNum);
    }

    //Check for Win or Loss, if so reset game
    function checkGameScore(){
        if(userNum === targetNum){
            $("#resultAlert").text("You Win!");
            totalWin = totalWin + 1
            getRoundValue();
        }
        else if(userNum > targetNum){
            $("#resultAlert").text("You Lost!");
            totalLoss = totalLoss + 1
            getRoundValue();
        }
        $(".totalWin").text(totalWin);
        $(".totalLoss").text(totalLoss);
    }

//========================================================================================================================
// PLAY GAME
//========================================================================================================================

    getRoundValue();
    $(".totalWin").text(totalWin);
    $(".totalLoss").text(totalLoss);

    // Click listeners for crystalButtons and add to userScore
        $("#crystalButton1").click(function(){
            userNum = userNum + crystalNum1
            $(".userScore").text(userNum);
            checkGameScore();
        });

        $("#crystalButton2").click(function(){
            userNum = userNum + crystalNum2
            $(".userScore").text(userNum);
            checkGameScore();
        });

        $("#crystalButton3").click(function(){
            userNum = userNum + crystalNum3
            $(".userScore").text(userNum);
            checkGameScore();
        });

        $("#crystalButton4").click(function(){
            userNum = userNum + crystalNum4
            $(".userScore").text(userNum);
            checkGameScore();
        });
});