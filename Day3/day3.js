var input = 361527;

//Part 1
var addBy = 1;
var total = 1;
var counter = 0;
while(total<=input){
  counter++;
  addBy += 8;
  total += addBy;
  console.log("Total: " + total);
  console.log("addBy: " + addBy);
  console.log("Counter: " + counter);
}