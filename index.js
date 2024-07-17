// myEach: Iterates over a collection, passing each element to the callback function.
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key]);
        }
      }
    }
    return collection;
  }
  
  // myMap: Creates a new array with the results of calling a callback function on every element in the collection.
  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key], key, collection));
        }
      }
    }
    return result;
  }
  
  // myReduce: Reduces a collection to a single value by applying a callback function to each element.
  function myReduce(collection, callback, acc) {
    let start = 0;
    if (acc === undefined) {
      // If acc is undefined, use the first value as the initial accumulator
      acc = collection[Object.keys(collection)[0]];
      start = 1;
    }
    
    if (Array.isArray(collection)) {
      for (let i = start; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else {
      // If it's an object, iterate through its keys
      let keys = Object.keys(collection);
      for (let i = start; i < keys.length; i++) {
        acc = callback(acc, collection[keys[i]], collection);
      }
    }
    
    return acc;
  }
  
  // myFind: Returns the first element in the collection that passes a truth test (predicate).
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (predicate(collection[key])) {
            return collection[key];
          }
        }
      }
    }
    return undefined;
  }
  
  // myFilter: Returns an array of all elements in the collection that pass a truth test (predicate).
  function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (predicate(collection[key])) {
            result.push(collection[key]);
          }
        }
      }
    }
    return result;
  }
  
  // mySize: Returns the number of elements in the collection.
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // myFirst: Returns the first element of an array or the first n elements if n is provided.
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  // myLast: Returns the last element of an array or the last n elements if n is provided.
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  // myKeys: Retrieves all the names of the object's own enumerable properties.
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // myValues: Retrieves all the values of the object's own properties.
  function myValues(object) {
    return Object.values(object);
  }