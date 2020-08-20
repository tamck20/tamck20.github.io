// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-tamck20');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./tamck20.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array){
    return array.filter(customerObj => {
        return customerObj.gender === 'male';
    }).length;
};

var femaleCount = function(array){
    //I: the customers array
    //O: number of female customers
    //C: must use reduce
    //call reduce with arguments of collection, function and seed
    //need a seed because the datatype of the first element is not the same dataype as expected output
    return array.reduce(function(counter, customerObj){
        if(customerObj.gender === 'female'){
            counter += 1;
        }
        return counter;
    }, 0);
};

var oldestCustomer = function(array){
    //I: customers array
    //O: name of oldest customer in a string
    //C: none
    //Use reduce to loop through and create string for seed
    //set max age to 0
    let maxAge = 0;
    return _.reduce(array, (acc, curr) => {
        //if current customer age is > maxAge, set maxAge = to oldest age and return the name
        if(curr.age > maxAge){
            maxAge = curr.age;
            acc = curr.name;
        }
        //return acc to print name of oldest customer
        return acc;
    }, '');
};

var youngestCustomer = function(array){
let maxAge = 50;
return _.reduce(array, (acc, curr) => {
    if (curr.age < maxAge){
        maxAge = curr.age;
        acc = curr.name;
    }
    return acc;
    }, '');
};
var averageBalance = function(array){
     // I: array
    // O: number
    // C: none
   return _.reduce(array, function(sum, customerObj) {
        let balance = Number(customerObj.balance.replace(/[^0-9\.]+/g,""));
        sum += balance;
        return sum;
    }, 0)/array.length;
};

var firstLetterCount = function(array, letter){
    return _.reduce(array, function(count, customerObj){
        if(customerObj.name[0].toLowerCase() === letter.toLowerCase()){
            count += 1;
        }
        return count;
    }, 0);
};

var friendFirstLetterCount = function(array, customer, letter){
   return _.reduce(array, function(count, customerObj) {
    let x = _.filter(array, user => user.name === customer)[0];
        return firstLetterCount(x.friends, letter);
}, 0);
};

var friendsCount = function(array, name){
     // create empty array
      let arr = [];
      // loop the array
    for (let i = 0; i < array.length; i++){
        // now sub loop the friends array
        for(let n = 0; n < array[i].friends.length; n++){
            // if the friends name is equal to name push it into array
            if (array[i].friends[n].name === name){
                arr.push(array[i].name);
        }
        }
   } return arr;
};

var topThreeTags = function(array){
    //find three most common tags of all the customers
    //create empty array to push common tags
    //loop through customers array
    //loop through each customers tags array
    //push all tags in new array
    //revert back to repl.it
    let allTags = [];
    _.each(array, function(customer){
        _.each(customer['tags'], function(tag){
            allTags.push(tag);
        });
    });
   var tagCount = _.reduce(allTags, function(finalObj, tag){
   if(finalObj[tag]){
    finalObj[tag]++;
  } else {
    finalObj[tag] = 1;
  }
  return finalObj;
}, {});
console.log(tagCount);
//sub arrays
var arrayOfNestedCounts = [];
for (let key in tagCount){
  //pushing the key (each word) and then pushing each value but pushing them inside an array
  arrayOfNestedCounts.push([key, tagCount[key]]);
}
arrayOfNestedCounts.sort(function(a, b){
  return b[1] - a[1];
});
const top3TagsResult = [];
//use for loop to grab first three words in array
for (let i = 0; i <= 2; i++){
  top3TagsResult.push(arrayOfNestedCounts[i][0]);
}
return top3TagsResult;
};

var genderCount = function(array){
    var count = _.reduce(array, (obj, customerObj) => {
        obj[customerObj.gender] = (obj[customerObj.gender] || 0) + 1;
        return obj;
    }, {});
    return count;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
