class Vehicle {
    constructor(make, model, year, weight) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.needsMaintenance = false;
      this.tripsSinceMaintenance = 0;
    }
  
    resetMaintenance() {
      this.needsMaintenance = false;
      this.tripsSinceMaintenance = 0;
    }
  
    repair() {
      this.resetMaintenance();
    }
  
    displayInformation() {
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Weight: ${this.weight}`);
      console.log(`- Needs maintenance: ${this.needsMaintenance}`);
      console.log(`- Trips since maintenance: ${this.tripsSinceMaintenance}`);
      console.log(`------------------------------`);
    }
  }

  class Car extends Vehicle {
      drive() {
          this.isDriving = true;
      }
      stop() {
          this.isDriving = false;
          this.tripsSinceMaintenance += 1;
      
      if (this.tripsSinceMaintenance === 100) {     

      this.needsMaintenance = true;
          
      }
    }     
}
const tesla = new Car("Tesla","Model X","2019","2300");
const golf = new Car("Golf" , "Golf 2", "1980","1248");
const bmw = new Car("Bmw", "Bmw X5","2016", "2134");

for (let i = 0; i < 10; i++) {
    
    tesla.drive();
    tesla.stop();
    
}
for (let i = 0; i < 58; i++) {
    
    golf.drive();
    golf.stop();
    
}
for (let i = 0; i < 122; i++) {
    
    bmw.drive();
    bmw.stop();
    
}

tesla.displayInformation();
golf.displayInformation();
bmw.displayInformation();

bmw.repair();
bmw.displayInformation();

