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
    return word.charAt(cipher[firstLetter]);
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

function createCharacter(name, nickname, race, origin, attack, defense, weapon){
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function(){
      console.log(`${this.name} is a ${this.race} of the ${this.origin} who uses the ${this.weapon}.`);
    },
    evaluateFight: function(character){
      let x = (this.attack - character.defense) > 0 ? (this.attack - character.defense) : 0;
      let y = (character.attack - this.defense) > 0 ? (character.attack - this.defense) : 0;
      console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);
    }
  };
}

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'Wizard Staff'),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'Ring'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'Sting and Barrow Blade'),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 7, 'Aduril'),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow')
];

characters.push(createCharacter('Arwen Undomiel', 'joe', 'Half-Elf', 'Rivendell', 10, 10, 'Hadhafang'));

const aragorn = characters.find(function(element) {
  return element.nickname === 'aragorn';
});

aragorn.describe();

const hobbits = characters.filter(element => element.race === 'Hobbit');

const powerful = characters.filter(element => element.attack > 5);

// for(let h in powerful){
//   console.log(powerful[h].name);
// }

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query){
  for (let hero in arr){
    let found = true;
    for (let attribute in query){
      if (arr[hero][attribute] !== query[attribute]){
        found = false;
      }
    }
    if (found) {
      return arr[hero];
    }
  }
  return null;
}

// console.log(findOne(HEROES, { id: 1 }));
// // => { id: 1, name: 'Captain America', squad: 'Avengers' }

// console.log(findOne(HEROES, { id: 10 }));
// //=> null

// console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
// //=> null

// console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
// //=> { id: 5, name: 'Wonder Woman', squad: 'Justice League' }

// console.log(findOne(HEROES, { squad: 'Justice League' }));
// //=> { id: 4, name: 'Superman', squad: 'Justice League' }

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function(query){
    let arr = this.store.heroes;
    for (let hero in arr){
      let found = true;
      for (let attribute in query){
        if (arr[hero][attribute] !== query[attribute]){
          found = false;
        }
      }
      if (found) {
        return arr[hero];
      }
    }
    return null;
  }
};

console.log(Database.findOne({ id: 2}));