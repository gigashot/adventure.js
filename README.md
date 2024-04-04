# adventure.js


console.log("Hello waa")
//Prettier

//Literals
let spaceshipLocation = "Tatooine"
console.log("The spaceship is currenttly at " + spaceshipLocation + ".")

spaceshipLocation = "Ja pzierdole"
console.log("The spaceship is currenttly at " + spaceshipLocation + ".")

const heroName = "Chewbacca"
console.log(`His name who shall lead us is  ${heroName} .`)


const isJedi = true
const isSith = false

let master = null
let apprentice

console.log("Is Luke a Jedi " + isJedi)
console.log("Is Luke a Sith " + isSith) 



console.log("Master:" + master)
console.log("Apprentice:" + apprentice)

const symbol1 = Symbol("force")
const symbol2 = Symbol("force")
console.log(symbol1 === symbol2)

let deathStarPower = 100;
let xWingPower = 40;

console.log("Is Death Star more powerful than X wing" , deathStarPower > xWingPower)

const lukeSkywalker = "Jedi"
const darthVader = "Sith"

console.log("Is luke a Jedi?", lukeSkywalker === "Jedi")
console.log("Is luke a Jedi?", lukeSkywalker !== "Jedi")

// &&  AND
// ||  OR

let hasJediTraining = true
let hasLightSaber = true

let isReadyForMission = hasJediTraining && hasLightSaber

let isReadyForMission2 = hasJediTraining || hasLightSaber

console.log("is he ready for this ultra hard mission??", isReadyForMission )

console.log("is he ready for this ezy mission??", isReadyForMission2 )

let fuel = 100;

if (fuel == 100){
    console.log("Fuel sufficent... proceed")
} else{
    console.log("fuel insufficent... abort")
}

let planet = "Alderaan"

if(planet === "Alderaan"){
    console.log("AAAA get tf out snob")
} else if(planet === "Tatooine"){
    console.log("welcome sand bitch")
} else{
    console.log("Turn away immigrant !!")}




// switch statement

let droid = "R2-D2";
switch (droid) {
    case "C-3PO":
        console.log("C-3PO is a protocol droid");
        break;
    case "R2-D2":
        console.log("R2-D2 is an astromech droid");
        break;
    default:
        console.log("You are not a droid");
}

// ternary op

// let ForceSensitive = true
// let message = ForceSensitive ? "Potential to become a Jedi" : "You have no potential to become a Jedi  ('Jedi'/'Sith')";
// console.log(message);

// priklad s prompt()
// let path = prompt("are you JEDI or Sith")

// if (path === 'Jedi'){
//     console.log("bruh")
// } else if(path==='Sith'){
//     console.log("ahaaha")
// }

// let profesion = prompt("what r u")
// switch(profesion){
//     case "plumber":
//         console.log("u r a plumberino")
//         break
//     case "electrician":
//         console.log("u r an electriciano")
//         break
//     default:
//         console.log("u r unemployed")
// }

// ternary op agin

// let alignment = prompt("CHOOSE (Dark/Light)")

// let message = alignment === "light"? "u white boi":"black as a night";
// console.log(message)


let experience = parseInt(prompt("ur exp lvl ?"),10)
let rank = experience >50 ? "Jedi master": "noob";
console.log("you are " + rank + ".")