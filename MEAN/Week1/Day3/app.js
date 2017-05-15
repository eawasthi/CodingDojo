var my_module = require('./mathlib')();     //notice the extra invocation parentheses!
console.log(my_module);
my_module.add(1,1);
my_module.multiply(5,6);
my_module.square(5);
my_module.random(10,100);