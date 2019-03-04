// Average score
var avgJohn = (89 + 120 + 103) / 3;
var avgMike = (116 + 94 + 123) / 3;
var avgMary = (97 + 134 + 105) / 3;

if (avgJohn > avgMike && avgJohn > avgMary) {
    console.log('John\'s team wins with ' + avgJohn + ' points');
} else if (avgMike > avgJohn && avgMike > avgMary) {
    console.log('Mike\'s team wins with ' + avgMike + ' points');
} else if (avgMary > avgJohn && avgMary > avgMike) {
    console.log('Mary\'s team wins with ' + avgMary + ' points');
} else {
    console.log('It\'s a draw!');
}
    

console.log(avgJohn, avgMike, avgMary);