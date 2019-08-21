'use strict';


let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */

validator.isValid = (input, rules) => {
  // return true;

  if(rules === 'kLongerThanLength') {

    return typeof input === 'number';
  }

  if(rules === 'negative') {
    return input < 0;
  }

  if(rules === 'object') {
    // Vinicio - how do I check if the type of the input is an object
    return typeof input === 'object';

  }

};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

validator.isNumber = (input) => {
  return typeof input === 'number';
};

validator.isArray = (input) => {
  return Array.isArray(input);
};

validator.isObject = (input) => {
  return typeof input === 'object';
};

validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};

validator.isFunction = (input) => {
  return typeof input === 'function';
};

validator.isProperties = (input) => {
  return typeof input === 'string';
};

validator.isObjectValid = (data, schema) => {
  //data is going to be an object
  //schema is going to be an object that has a property called fields
  let result = true;
  Object.keys(schema.fields).forEach(expectedProperty => {
    if (! data.hasOwnProperty(expectedProperty)) {
      result = false;
    }
  });
  return result
};

validator.isProperties = (data, schema) => {
 // return typeof
}