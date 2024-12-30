let firstWord = ["Doe to ", "Apesar do ", "Talvez ", "Agora sim ", "Quando é que ", "Sendo "];
let middleWord = ['Arilton ', "Ben e António ", "Bela ", "Caim ", "Abreu ", "Petro de Luanda "];
let lastWord = ["fizeram isso?", "tal como esta...", "fica assim?", "até que se conclua.", "poderá ser assim. Campeão!", "we're into an inconvenience."];

let first = firstWord[Math.floor(Math.random() * firstWord.length)];
let middle = middleWord[Math.floor(Math.random() * middleWord.length)];
let last = lastWord[Math.floor(Math.random() * lastWord.length)];

console.log(first + middle + last);