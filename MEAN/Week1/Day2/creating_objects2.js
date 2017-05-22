function VehicleConstructor(name, numberOfWheels, numberOfPass,speed){
	var distance_travelled=0;
	var updateDistanceTravled= function(){
		distance_travelled+=this.speed;
	}
	this.name=name;
	this.numberOfWheels=numberOfWheels;
	this.numberOfPass=numberOfPass;
	this.speed=speed;

	this.makenoise = () =>{console.log("noise")}

	this.move=function(){
		this.makenoise();
		updateDistanceTravled();

	this.checkmiles = function(){
	console.log(distance_travelled);
};
};

}
var bike= new VehicleConstructor("bike", 2, 1);
bike.makenoise=() =>{console.log("ring ring!")};

bike.makenoise();


var sedan= new VehicleConstructor("sedan", 4, 1);
sedan.makenoise=() =>{console.log("honk honk!")};

sedan.makenoise();

var bus= new VehicleConstructor("bus", 4, 1);
bus.addpassengers=() =>{bus.numberOfPass+=1};

bus.addpassengers();










// updateDistanceTravled()
// console.log(distance_travelled);
// console.log(bus);
// console.log(bike);
// console.log(sedan);
console.log(bus);
bus.addpassengers();
console.log(bus);

