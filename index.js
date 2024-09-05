var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car Engine started");
    };
    return Car;
}());
var c = new Car("Mercedes", "Classe 1", 2020);
c.start();
