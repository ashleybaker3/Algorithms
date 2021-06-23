var a = 25;
a = a - 13;
console.log(a/2);
//  6  

a = "hello";
console.log(a + " hello");
// hello hello

for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
    // 0,4,8
}
    
console.log("outside of the loop " + i);
// outside of the loop 12

function getTotal(arrayOfNumbers) {
    
    var sum = arrayOfNumbers[0];
      
    for(var i=0; i<arrayOfNumbers.length; i++) {
      sum += arrayOfNumbers[i];
      console.log("the current sum is: " + sum); 
    }
      
    console.log("the total is: " + sum);
      
  }
      
  getTotal([1, 3, 5]);