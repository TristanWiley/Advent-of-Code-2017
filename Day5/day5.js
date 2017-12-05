var allInstructions = document.getElementsByTagName("pre")[0].innerHTML.split("\n").map(Number);

function calculate(part2){
  var instructions = allInstructions.slice();
  
  var inside = true;
  
  var currInstruction = 0;
  var steps = 0;
  
  while(inside){
    var a = instructions[currInstruction];
    if(a >= 3 && part2){
      instructions[currInstruction]--;
    }else{
      instructions[currInstruction]++
    }
    currInstruction+=a
    if(currInstruction > instructions.length-2){
      inside = false;
    }
    steps++;
  }
  return steps;
}

console.log("PART 1: " + calculate(false));
console.log("PART 2: " + calculate(true));