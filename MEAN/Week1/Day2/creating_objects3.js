function VehicleConstructor(name, numberOfWheels, numberOfPass,speed,vin){

	this.distance_travelled=0;
	this.name=name;
	this.numberOfWheels=numberOfWheels;
	this.numberOfPass=numberOfPass;
	this.speed=speed;
	this.vin=Math.floor(1000000000000000 + Math.random() * 9000000000000000);

}

VehicleConstructor.prototype.makenoise = function(){
	console.log("Ring Ring");
	return this;
};
	
VehicleConstructor.prototype.move = function (){
	this.makenoise();
	this.updateDistanceTravled();
	return this;
};

VehicleConstructor.prototype.checkmiles= function(){
	console.log(this.distance_travelled);
	return this;
};

VehicleConstructor.prototype.updateDistanceTravled= function(){
	this.distance_travelled+=this.speed;
	console.log(this.distance_travelled);
};

var bike= new VehicleConstructor("bike", 2, 1,75);
var sedan= new VehicleConstructor("sedan", 4, 1,90);
var bus= new VehicleConstructor("bus", 4, 1,10);

bike.makenoise().move().checkmiles().updateDistanceTravled();
sedan.makenoise().move().checkmiles().updateDistanceTravled();





// console.log(bike);
// console.log(sedan);
// console.log(bus);
// bus.checkmiles();
// bus.move();
// bus.updateDistanceTravled();
// // VehicleConstructor.prototype.makenoise();
// // VehicleConstructor.prototype.move();
// // VehicleConstructor.prototype.checkmiles();
// // bus.addpassengers();
// // console.log(bus);

