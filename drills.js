'use strict';

function createMyObject() {
  return {
    foo:'bar',
    answerToUniverse:42,
    'olly olly':'oxen free',
    sayHello:function(){
      return 'hello';
    }
  };
}
  
/* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
(function testCreateMyObject() {
  var obj = createMyObject();
  if (typeof obj !== 'object') {
    console.error('ERROR: `createMyObject` must return an object');
    return false;
  }
  var expectedKeys = ['foo', 'answerToUniverse', 'olly olly', 'sayHello'];
  expectedKeys.forEach(function(key) {
    if (!(key in obj)) {
      console.error('ERROR: Missing a key for ' + key);
      return false;
    }
  });
  if (obj.foo !== 'bar') {
    console.error('ERROR: Value for `foo` should be \'bar\' but was ' + obj.foo);
    return false;
  }
  if (obj.answerToUniverse !== 42) {
    console.error(
      'ERROR: Value for `answerToUniverse` should be 42 but was ' +
          obj.answerToUniverse
    );
    return false;
  }
  if (obj['olly olly'] !== 'oxen free') {
    console.error(
      'ERROR: Value for `\'olly olly\'` should be \'oxen free\' but was ' +
          obj['olly olly']
    );
    return false;
  }
  if (!(typeof obj.sayHello === 'function' && obj.sayHello() === 'hello')) {
    console.error(
      'ERROR: Value for `sayHello` must be a function that returns the string \'hello\''
    );
    return false;
  }
  console.log('SUCCESS: Your function works!');
})();

function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}



/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

(function testUpdateObject() {
  var oldObj = {
    cats: 'cats',
    dogs: 'dogs',
  };
  var newObj = updateObject(oldObj);
  if (typeof newObj !== 'object') { 
    console.error('ERROR: `createMyObject` must return an object');
    return false;
  }
  ['foo', 'bar', 'bizz', 'bang'].forEach(function(key) {
    if (!(key in newObj)) {
      console.error('ERROR: `' + key + '` not in object returned by `updateObject`');
      return false;
    }
  });
  ['foo', 'bar', 'bizz', 'bang'].forEach(function(key) {
    if (newObj[key] !== key) {
      console.error('ERROR: `' + key + '` should be "' + key + '" but was ' + newObj[key]);
      return false;
    }
  });
  if (!(newObj.cats === 'cats' && newObj.dogs === 'dogs')) {
    console.error('ERROR: your function doesn\'t preserve existing key/value pairs');
    return false;
  }
  console.log('SUCCESS: `updateObject` works correctly!');
  
})();

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function(){
      return `${this.firstName} ${this.lastName}`;  
    },
  };
  return person;
}
  
/* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
(function testPersonMaker() {
  var person = personMaker();
  if (typeof person !== 'object') {
    console.error('ERROR: `personMaker` must return an object');
    return false;
  }
  if (typeof person.fullName !== 'function') {
    console.error('ERROR: `fullName` must be a method');
    return false;
  }
  if (person.fullName() !== 'Paul Jones') {
    console.error(
      'ERROR: The value for `fullName` should be "Paul Jones" but was ' +
          person.fullName()
    );
    return false;
  }
  person.firstName = 'Lisa';
  person.lastName = 'Simpson';
  if (person.fullName() !== 'Lisa Simpson') {
    console.error(
      '`personMaker` is not using self reference correctly. ' +
          'When firstName set to "Lisa" and lastName set to "Simpson", ' +
          'should return "Lisa Simpson" but returned ' +
          person.fullName()
    );
  }
  console.log('SUCCESS: `updateObject` works correctly!');
})();

function makeStudentsReport(data) {
  let results = [];
  for (let i = 0; i < data.length; i++){
    results.push(`${data[i].name}: ${data[i].grade}`);
  }
  return results;
}
  
/* From here down, you are not expected to 
     understand.... for now :)  
     
     Nothing to see here!
     
  */
  
// tests
  
function testIt() {
  const testData = [
    { name: 'Jane Doe', grade: 'A' },
    { name: 'John Dough', grade: 'B' },
    { name: 'Jill Do', grade: 'A' },
  ];
  
  const expectations = ['Jane Doe: A', 'John Dough: B', 'Jill Do: A'];
  
  const results = makeStudentsReport(testData);
  
  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `makeStudentsReport` must return an array');
    return;
  }
  if (results.length !== testData.length) {
    console.error(
      'FAILURE: test data had length of ' +
          testData.length +
          ' but `makeStudentsReport` returned array of length ' +
          results.length
    );
    return;
  }
  for (let i = 0; i < expectations.length; i++) {
    let expect = expectations[i];
    if (
      !results.find(function(item) {
        return item === expect;
      })
    ) {
      console.error(
        'FAILURE: `makeStudentsReport` is not ' + 'producing expected strings'
      );
      return;
    }
  }
  console.log('SUCCESS: `makeStudentsReport` is working');
}
  
testIt();
  