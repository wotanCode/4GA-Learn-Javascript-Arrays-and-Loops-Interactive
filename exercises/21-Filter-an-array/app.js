let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here
let resultingNames = allNames.filter(function(letra){
    return (letra.charAt(0) == "R")
});

console.log(resultingNames);