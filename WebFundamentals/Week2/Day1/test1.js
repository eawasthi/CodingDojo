function test() {
	var count=0;
	var count1=0;
var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }
 console.log("Students");
 for (var i =0 ; i<users.Students.length;i++){
 	count=count+1;
 	
console.log(count + " " + users.Students[i].first_name + " " + users.Students[i].last_name);}
console.log("Instructors");
 for (var i =0 ; i<users.Instructors.length;i++){
 	count1=count1+1;

console.log(count1 + " " + users.Instructors[i].first_name + " " + users.Instructors[i].last_name);}
}
test();