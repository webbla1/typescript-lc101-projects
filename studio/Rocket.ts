import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";
import { Cargo } from "./Cargo";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass( items: Payload[] ): number {
        let totalKg: number = 0;
        for (let item of items) {
            totalKg = totalKg + item.massKg;
        }
        return totalKg
    }
    currentMassKg(): number {
        let sumMass: number = 0;
        let astronautTotal: number = 0;
        let cargoItemsTotal: number = 0;
        for (let item of this.astronauts) {
            astronautTotal = astronautTotal + item.massKg;
        }
        for (let item of this.cargoItems) {
            cargoItemsTotal = cargoItemsTotal + item.massKg;
        }
        sumMass = astronautTotal + cargoItemsTotal;
        return sumMass
    }
    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true
        } 
        return false
    }
}

let falcon9: Rocket = new Rocket('Falcon 9', 7500);
let testAstr: Astronaut = new Astronaut(10000, "Testing");
let testCargo: Cargo = new Cargo(10000, "Test Material");
falcon9.astronauts = [testAstr];
falcon9.cargoItems = [testCargo];
//console.log(falcon9.sumMass([testAstr]));
console.log(falcon9.canAdd(testCargo));