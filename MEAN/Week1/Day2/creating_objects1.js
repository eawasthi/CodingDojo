function VehicleConstructor(name, numberOfWheels, numberOfPass){
	var vehicle = {};
	vehicle.name=name;
	vehicle.numberOfWheels=numberOfWheels;
	vehicle.numberOfPass=numberOfPass;


	vehicle.makenoise = () =>{console.log("noise")}
	return vehicle;
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

console.log(bike);
console.log(sedan);
console.log(bus);
bus.addpassengers();
console.log(bus);

