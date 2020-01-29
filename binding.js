var car="Skoda rapid";

var myConstruct={
  car:"Vento",
  getCar: function(){
    return this.car;
  }
}
console.log(myConstruct.getCar());
var saveForlater = myConstruct.getCar;
console.log(saveForlater());

var theRealCar = saveForlater.bind(myConstruct);
console.log(theRealCar());
var theRealCar = saveForlater.bind(this);
console.log(theRealCar());