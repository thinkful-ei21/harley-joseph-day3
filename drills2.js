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
  {name:'Riker',jobTitle:'Number One'},
  {name:'LaForge',jobTitle:'Chief Engineer'}
];

for(let i in starTrek){
  for (let officer in starTrek[i]){
    console.log(`${officer}: ${starTrek[i][officer]}`);
  }
}