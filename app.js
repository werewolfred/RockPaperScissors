
var rock = rock > scissors;
var scissors = scissors > paper;
var paper = paper > rock;
function user(choice) {
    if (choice === rock) {
        return rock;
    } if (choice === paper) {
        return paper;
    } if (choice === scissors) {
        return scissors;
    }
}
function computer(choice) {
    if (choice === rock) {
        return rock;
    } if (choice === paper) {
        return paper;
    } if (choice === scissors) {
        return scissors;
    }
}
function game(choice) {
    if (user.choice > computer.choice) {
        return "winner"
    } else {
        return "loser"
    }
}