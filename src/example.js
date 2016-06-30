var localStorageFunctions = {
    set: 'setItem',
    get: 'getItem',
    unset: 'removeItem'
};
var localStorageProvider = new StorageProvider(localStorage, localStorageFunctions);
var local = new Storage('example', localStorageProvider);
local.create('x', 'y');
console.log(local.read('x'));
local.update('x', 'what are you talking about');

var sessionStorageFunctions = {
    set: 'setItem',
    get: 'getItem',
    unset: 'removeItem'
};
var sessionStorageProvider = new StorageProvider(sessionStorage, sessionStorageFunctions);
var session = new Storage('S-mixed-', sessionStorageProvider);
session.create('x', 'y');
console.log(session.read('x'));
session.update('x', 'This is the session storage');
console.log(session.read('x'));
