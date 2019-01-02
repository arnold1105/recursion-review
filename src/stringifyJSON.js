// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //input: an object
  //output: a string
  //take in an object as an arguments
  //check typeof arguments
    //if it's an object, convert the object to string
    //arrays - convert array to string
    //boolean, numbers, null - convert to string
  //for function and undefined, ignore
  //return the result
  
  //create an empty sting to hold the values
  if (typeof obj === 'number' || typeof obj === 'boolean') return '' + obj;
  if (obj === null) return '' + null;
  if (typeof obj === 'string') return '"' + obj + '"';
  //if (obj.length === 0) return '"' + obj + '"';
  
  if (Array.isArray(obj)) {
    let results = [];
    for (var i = 0; i < obj.length; i++) {  //[1, 2, 3] ['1', '2', '3']
      results.push(stringifyJSON(obj[i])) //recursively calls function for each element of the array
    }
    return '[' + results.join() + ']' //joining the array back
  }
  
  if (typeof obj === 'object' && obj) {
    let results = [];
    for (var keys in obj) {
      if (typeof obj[keys] === 'function' || typeof keys === 'function' || obj[keys] === undefined || keys === undefined) {
        continue;
      }
      results.push(stringifyJSON(keys) + ':' + stringifyJSON(obj[keys]))
    }
    return '{' + results.join() + '}'

  }
  // if (typeof obj === 'object' && obj && obj[keys] !== undefined && typeof obj !== 'function'){
  //   let results = [];
  //   for (var keys in obj) {
  //     results.push(stringifyJSON(keys) + ':' + stringifyJSON(obj[keys])) 
  //   } 
  //     return '{' + results.join() + '}'
  // }
};
