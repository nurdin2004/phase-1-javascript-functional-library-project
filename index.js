//my functions
function myEach(collection, callback) {
    const values = Array.isArray(collection)
      ? collection
      : Object.values(collection);
    for (let value of values) {
      callback(value);
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const values = Array.isArray(collection)
      ? collection
      : Object.values(collection);
    const newArray = [];
    for (let value of values) {
      newArray.push(callback(value));
    }
    return newArray;
  }
  
  function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection)
      ? collection
      : Object.values(collection);
    let start = acc !== undefined ? acc : values[0];
    const initialIndex = acc !== undefined ? 0 : 1;
    for (let i = initialIndex; i < values.length; i++) {
      start = callback(start, values[i], collection);
    }
    return start;
  }
  
  function myFind(collection, predicate) {
    const values = Array.isArray(collection)
      ? collection
      : Object.values(collection);
    for (let value of values) {
      if (predicate(value)) return value;
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const values = Array.isArray(collection)
      ? collection
      : Object.values(collection);
    const newArray = [];
    for (let value of values) {
      if (predicate(value)) newArray.push(value);
    }
    return newArray;
  }
  
  function mySize(collection) {
    return Array.isArray(collection)
      ? collection.length
      : Object.keys(collection).length;
  }
  
  function myFirst(array, n) {
    if (n !== undefined) {
      return array.slice(0, n);
    }
    return array[0];
  }
  
  function myLast(array, n) {
    if (n !== undefined) {
      return array.slice(-n);
    }
    return array[array.length - 1];
  }
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
