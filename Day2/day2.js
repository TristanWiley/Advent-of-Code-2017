var rows = document.getElementsByTagName("pre")[0].innerHTML.split("\n");

//Part 1
var total = 0;
for(row of rows){
  var items = row.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } ).map(Number);
  if(items.length == 0) continue;
  total += Math.max.apply(null, items) - Math.min.apply(null, items);
}

console.log(total);

//Part 2
var total2 = 0;
for(row of rows){
  var items = row.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } ).map(Number);
  for(item of items){
    if(items.length == 0) continue;
    for(item2 of items){
      if(item == item2) continue;
      if(item % item2 == 0){
        total2 += (Math.max(item, item2) / Math.min(item, item2))
      }
    }
  }
}

console.log(total2);