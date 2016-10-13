var inherit = require('./inherit.js'),
	Vehicle = require('./Vehicle.js');

var Car = function (fuelConsumption, size, price) {
    this.fuelConsumption = fuelConsumption || 10;
    this.size = size || "a";
    this.price = price || 10000;
};

inherit(Car, Vehicle);

module.exports = Car;