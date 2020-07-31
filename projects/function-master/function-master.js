//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
//return the values of the object into an array
//intialize new array 
let arr = [];
//loop through object and grab values
for (let value in object){
    //push values into new array
    arr.push(object[value]);
    }
    //return array
return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//return all the keys into a string seperated by a space
let arr = [];
//loop through object
for (let key in object){
    //push keys into arr
    arr.push(key);
}
//join keys with a space
return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
//create new array to push only string values seperated by a space
let arr = [];
for (let value in object){
    //check to see if value is a string using typeof
    if(typeof object[value] === 'string'){
        //push value into array
        arr.push(object[value]);
    }
}
//return arr with a space in between 
return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return 'array';
    }
    return 'object';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
//return the first letter of the string capitalized
    return string.replace(string[0], string[0].toUpperCase());
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
//return a string with all the words capitalized
//create str variable and split
let str = string.split(' ');
//loop through words
for (let i = 0; i < str.length; i++){
        //set letter uppercase, return new copy of strings using slice to go to next word
    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    //return string with a space
    return str.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//use previous function to get capitalization of words
let name = capitalizeWord(object.name);
return `Welcome ${name}!`;

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//capitalize the first letter of the name and species
//return "name is a species"
 let name = capitalizeWord(object.name);
 let species = capitalizeWord(object.species);
 return `${name} is a ${species}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//check and see if the object has a noises array
//if there are, return the noises, seperated by a space
//if not, return 'there are no noises'
if (Array.isArray(object.noises) && object.noises.length > 0){
    return object.noises.join(' ');
}
return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//push new friend inside of the friends array inside of the object
object.friends.push(name);
//return object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
//check to see if friends object has a friend inside of the friends array
if (Object.keys(object).length > 0 && object.friends.includes(name)){
    //if it has friends and the name is included, return true
    return true;
}
//if name is not included, return false
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//check to see if given name is in the friends array
//create a new array to store non friends
//use for loop to access the names of friends inside the array
let nonFriendsArr = [];
for(let i = 0; i < array.length; i++){
    //check if input name is in friends array
    //if the given name is not in the friends array add the current object name to nonfriends array
    //check if the given name is not the object name property
    if(!array[i].friends.includes(name) && name !== array[i].name){
        //if the name is not a match and they are not friends, push the name into array
        nonFriendsArr.push(array[i].name);
        }
    }
    return nonFriendsArr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//update new values to object
//loop through object
//if the keys match, insert new value 
    for (let nkey in object){
        if (key === nkey){
            object[nkey] = value;
        } else {
            object[key] = value;
        }
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//remove properties that are listed in the array
//loop through array and if they match, delete it
for (let i = 0; i < array.length; i++){
    for(let key in object){
        if (array[i] === key){
            delete object[key];
        }
    }
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//remove all duplicates in array and put them into new array
let arr = [];
//loop through array
for (let i = 0; i < array.length; i++){
    //check to see if the element is in the array 
    if(arr.indexOf(array[i]) === - 1){
        //if it is, push to new array
        arr.push(array[i]);
    }
}
//return non duplicate array
return arr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}