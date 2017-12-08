// Array.map( cb(item) )
// Array.reduce( cb(total, item), [initalTotal])

animals = ['cat','dog','rock','fish','snake','turtle'];

animalsMap = animals.map(function(animal) {
  var strVowels = animal.match(/[aeiouy]/gi);       // string
  var numVowels = strVowels ? strVowels.length : 0; // number
  return { first: animal.charAt(0),
           vowels: numVowels,
           consonants: animal.length - numVowels };
});

reduced = animalsMap.reduce(function(total, mappedAnimal) {
  return total + mappedAnimal.vowels;
}, 0);  // What is the 0?  What if it was []?

console.log('animals', animals);
console.log('animalsMap', animalsMap);
console.log('reduced', reduced);
