'use strict';

const greet = require('../lib/greet.js');
const faker = require('faker');

const name = faker.name.findName();
const number = faker.random.number();

describe('greet should concatenate `hello ` in front of a given string, and return null when supplied with a nonstring', () => {
  it('should return null given non-string values', function() {
    let expected = null;
    let output = greet.greeting(number);
    expect(output).toEqual(expected);
  });
  
  it('should return hello world when supplied world', () => {
    let expected = `hello ${name}`;
    let output = greet.greeting(name);
    expect(output).toEqual(expected);
  });
});