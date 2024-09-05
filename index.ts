interface Vehicle {
  make: string;
  model: string;
  year: number;

  start(): void ;
}

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start(): void {
    console.log("Car Engine started");
  }
}
let c = new Car("Mercedes", "Classe 1", 2020);
c.start();
