class Vehicle {
  constructor(name , wheelCount,spd){
    this.name = name
    this.wheelCount = wheelCount
    this.maxSpeed = spd
    this.speed = 0
  
  }
  accelerate(){
    const rate = this.name === 'Ferrari'? 2 : 3

      this.speed + this.maxSpeed/rate > this.maxSpeed ? 
      this.speed = this.maxSpeed :
      this.speed += this.maxSpeed/rate
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
