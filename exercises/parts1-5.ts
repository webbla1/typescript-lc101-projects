// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type
let spacecraftName: string = 'Determination';
let speedMph: number = 17500;
let kilomitersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;


// Part 2: Print Days to Mars
let milesToMars: number = kilomitersToMars * milesPerKilometer;
let hoursToMars: number = milesToMars / speedMph;
let daysToMars: number = hoursToMars / 24;


// Code an output statement here (use a template literal):
console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);



// Part 3: Create a Function ("getDaysToLocation")


// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
printDaysToLocation(location: SpaceLocation) {
    console.log(
        `${this.name} would take ${this.getDaysToLocation(
            location.kilometersAway
        )} days to get to ${location.name}.`
    );
}



// Part 4: Create a Spacecraft Class




// Create an instance of the class here:



// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:

//Icecream Example
interface IceCream {
    flavor: string;
    texture: string;
    calories: number;
    toppings: string[];
}

class topping {
    price: number;
    name: string;
    constructor (price:number, name: string){
        this.price = price;
        this.name = name;
    }
}
const MintChocolateChip: IceCream = {
    flavor: 'Mint Chocolate Chip',
    texture: 'Melty',
    calories: 100,
    toppings: ['Chocolate Chips', 'Whipped Cream']
}

const mCCFlavor = MintChocolateChip.flavor;

interface ScoopIceCreamProps {
  toppings?: string[]
  flavor: string
  numberOfScoops?: number
}

const scoopIceCream = ({flavor}: ScoopIceCreamProps) => {
    console.log(`${flavor} has been scooped.`)
}

scoopIceCream(MintChocolateChip)