// calculate how many slices of pizza each person should get when shared evenly.
//return an interpolated string.

function sharePizza (x,y){
let totalSlices = x; 
let d = x/y; 
let dividedSlices = d.toFixed(2); 

return console.log(`Each person gets ${dividedSlices} slices of pizza; from our ${totalSlices} slice pizza`); 
}

console.log(sharePizza(8,2)); 
console.log(sharePizza(8,3)); 
console.log(sharePizza(21,20)); 
console.log(sharePizza(10,3)); 