
let driverId = 0
class Driver {
  constructor(name){
    this.Id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
}