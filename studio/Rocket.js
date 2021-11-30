"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Astronaut_1 = require("./Astronaut");
var Cargo_1 = require("./Cargo");
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var totalKg = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            totalKg = totalKg + item.massKg;
        }
        return totalKg;
    };
    Rocket.prototype.currentMassKg = function () {
        var sumMass = 0;
        var astronautTotal = 0;
        var cargoItemsTotal = 0;
        for (var _i = 0, _a = this.astronauts; _i < _a.length; _i++) {
            var item = _a[_i];
            astronautTotal = astronautTotal + item.massKg;
        }
        for (var _b = 0, _c = this.cargoItems; _b < _c.length; _b++) {
            var item = _c[_b];
            cargoItemsTotal = cargoItemsTotal + item.massKg;
        }
        sumMass = astronautTotal + cargoItemsTotal;
        return sumMass;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
var falcon9 = new Rocket('Falcon 9', 7500);
var testAstr = new Astronaut_1.Astronaut(10000, "Testing");
var testCargo = new Cargo_1.Cargo(10000, "Test Material");
falcon9.astronauts = [testAstr];
falcon9.cargoItems = [testCargo];
//console.log(falcon9.sumMass([testAstr]));
console.log(falcon9.canAdd(testCargo));
