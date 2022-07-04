import { Animal, Cat } from "./index.js";

let cat = new Animal('Cat', 4)
cat.makeNoise('Meow')
console.log(cat.type)

console.log(Animal.return10())

console.log(cat.metaData)

cat.makeNoise()

console.log(cat.metaData)