class Vehicle {
  constructor(name , wheelCount,spd){
    this.name = name
    this.wheelCount = wheelCount
    this.maxSpeed = spd
    this.speed = 0
  }
  accelerate(){
    if (this.name === 'Ferrari'){
      this.speed + this.maxSpeed/2 > this.maxSpeed ? 
      this.speed = this.maxSpeed :
      this.speed += this.maxSpeed/2
    }else{
    this.speed + this.maxSpeed/3 > this.maxSpeed ? 
    this.speed = this.maxSpeed :
    this.speed += this.maxSpeed/3
    }
  }
}

class Car extends Vehicle{
  constructor(name,spd){
  super(name ,4,spd)
  }
  drive(){
    return this.name === 'Ferrari'? "Vroom. I'm a Ferrari!" :
     "Vroom. "
  }
}

class Ferrari extends Car{
  constructor(){
    super('Ferrari',180)
  }
}


module.exports = {
  Vehicle,
  Car,
  Ferrari
}
