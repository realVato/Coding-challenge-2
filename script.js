var teamJohn = 89 + 180 + 103;
var teamMark = 116 + 104 + 123;
var teamMary = 97 + 304 + 105;
console.log(teamJohn, teamMark, teamMary);

var johnAvg = teamJohn / 3;
var markAvg = teamMark / 3;
var maryAvg = teamMary / 3;
console.log(johnAvg, markAvg, maryAvg);

if (johnAvg > markAvg && johnAvg > maryAvg) {
    console.log('John\'s team has the highest avg score!');
} else if (johnAvg === markAvg && johnAvg === maryAvg) {
    console.log('All teams have the same avg');
} else if (johnAvg < markAvg && markAvg > maryAvg) {
    console.log('Mark\'s team has the highest avg score!');
} else if (maryAvg > markAvg && johnAvg < maryAvg){
    console.log('Mary\'s team has the highest avg score!');
}