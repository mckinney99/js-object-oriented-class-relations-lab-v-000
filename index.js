let store = {drivers:[], passengers:[], trips:[]}

let driverId = 0
class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(function(trip)){
      return trip.driverId === this.id
    }.bind(this))
  }
  passengers(){
    return store.passengers.filter(function(passenger){
      const driverTrips = this.trips()
      return driverTrips.filter(function(trip){
        return trip.passengerId = passenger.id
      })
    }.bind(this))
  }
}
}
