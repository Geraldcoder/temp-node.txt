// CommonJS, every file is module (by default)
// Modules = Encapsulated Code (only share minimum)
const names = require('./M-names')
const sayHi = require('./M-utils')
// console.log(names);
const data = require('./M-alternative-flavor')
require('./M-mind-grenade') 
console.log(data);
sayHi('Susan')
sayHi(names.John)
sayHi(names.Peter)