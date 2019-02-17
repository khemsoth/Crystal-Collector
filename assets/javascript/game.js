var wins = 0;
var losses = 0;
var score = 0;
var target = getRandInt(19, 120);
var crys1 = getRandInt(1, 12);
var crys2 = getRandInt(1, 12);
var crys3 = getRandInt(1, 12);
var crys4 = getRandInt(1, 12);    
    
// Set target score and crystal button values
$(document).ready(function() {
    $("#target").append(target);
    $("#crys1").val(crys1);
    $("#crys2").val(crys2);
    $("#crys3").val(crys3);
    $("#crys4").val(crys4);

// Add crystal values to score
$("#crys1").on("click", function() {
    score += crys1;
    $("#score").text("Score: " + score);
    checkResults();
});
$("#crys2").on("click", function() {
    score += crys2;
    $("#score").text("Score: " + score);
    checkResults();
});
$("#crys3").on("click", function() {
    score += crys3;
    $("#score").text("Score: " + score);
    checkResults();
});
$("#crys4").on("click", function() {
    score += crys4;
    $("#score").text("Score: " + score);
    checkResults();
})});

// Check results
function checkResults() {
if (score === target) {
    wins++;
    $("#wins").text("Wins: " + wins);
    alert("You win!");
    reset();
}
else if (score > target) {
    losses++;
    $("#losses").text("Losses: " + losses);
    alert("You lose.");
    reset();
}};

function reset() {
    score = 0;
    $("#score").text("Score: " + score);
    target = getRandInt(19, 120);
    $("#target").text("Target: " + target);
    crys1 = getRandInt(1, 12);
    crys2 = getRandInt(1, 12);
    crys3 = getRandInt(1, 12);
    crys4 = getRandInt(1, 12);
}

// Generate random number
function getRandInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
