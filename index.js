

let driverId = 0
class Driver {
  constructor(name){
    this.Id = ++driverId
    this.name = name
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(function(trip)){
      return trip.driverId === this.id
    }.bind(this))
  }
}
