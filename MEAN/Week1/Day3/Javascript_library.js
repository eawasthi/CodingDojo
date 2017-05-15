var _ = {
  map: function(array, callback){
    for (var i = 0; i < array.length; i++) {
      array[i] = callback(array[i]);
    }
  },

  find: function(array, callback) {
   for (var i = 0; i < array.length; i++) {
     if(callback(array[i])){

     return array[i];
   }
  }
},
  filter: function(array, callback){
  var newarray = [];
  for (var i = 0; i < array.length; i++) {
    if(callback(array[i])){
      newarray.push(array[i]);
    }

  }
  return newarray;
},

  reject: function(array, callback) {
  var newarray = [];
  for (var i = 0; i < array.length; i++) {
    if(!callback(array[i])){
      newarray.push(array[i]);
    }

  }
  return newarray;
},
}



var array = [3,4,5];
_.map(array, function callback(x){return x * 5;});
console.log(array)
console.log(_.find(array, function callback(num){return num % 2 == 0; }));
console.log(_.filter(array, function callback(x){ return x % 2 == 0; }));
console.log(_.reject(array, function callback(x){ return x % 2 == 0; }));
