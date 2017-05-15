module.exports = function (){
  return {
    add: function(num1, num2) { 
         console.log("The sum is " + num1 + num2);
    },
    multiply: function(num1, num2) {
         console.log("The product is "+ num1 * num2);
    },
    square: function(num) {
         console.log("Square is " + num * num);
    },
    random: function(num1, num2) {
         console.log("Random number is " + Math.floor(Math.random(num1,num2)*100));
    }
  }
};