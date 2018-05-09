'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return (this.water / this.flour) * 100;
  }
};

console.log(loaf.hydration());

const newObject = {
  foo:'1',
  bar:'2',
  fum:'3',
  quux:'4',
  spam:'5'
};

for (let prop in newObject){
  console.log(`${prop}:${newObject[prop]}`);
}

const hobbitsMeals = {
  meals : ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(hobbitsMeals.meals[3]);

const starTrek = [
  {name:'Picard',jobTitle:'Captain'},
  {name:'Riker',jobTitle:'Number One', boss:'Picard'},
  {name:'LaForge',jobTitle:'Chief Engineer', boss:'Picard'}
];

// for(let i in starTrek){
//   for (let officer in starTrek[i]){
//     console.log(`${starTrek[i][officer]} `);
//   }
// }

function starTrekMessages(arr) {
  for (let i = 0; i < starTrek.length; i++){
    if (starTrek[i].boss){
      console.log(`${starTrek[i].jobTitle} ${starTrek[i].name} reports to ${starTrek[i].boss}`);
    } else {
      console.log(`${starTrek[i].jobTitle} ${starTrek[i].name} reports to no one.`);
    }
  }
}
starTrekMessages(starTrek);

function wordToLetter(word) {
  let firstLetter = word.charAt(0);
  let cipher = {
    a:1,
    b:2,
    c:3,
    d:4
  };
  if(cipher[firstLetter]){
    return word.charAt(cipher[firstLetter])
  } else {
    return ' ';
  }
}

function decode(text) {
  let wordList = text.split(' ');
  let solution = '';
  for (let i = 0; i < wordList.length; i++) {
    solution = solution + wordToLetter(wordList[i]);
  }
  return solution;
}

function decodeWords(stringOfWords){
  return decode(stringOfWords);
}

console.log (decodeWords('craft block argon meter bells brown croon droop'));