'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');

let num1 = faker.random.number();
let num2 = faker.random.number();
let name = faker.name.findName();

describe('arithmetic module', () => {
  describe('subtraction', () => {
    it('requires numeric input', () => {
      let expected = null;
      let difference = arithmetic.subtract(num1, name);
      expect(difference).toEqual(expected);
    });
  
    it('subtracts correctly', () => {
      let expected = num1 - num2;
      let difference = arithmetic.subtract(num1, num2);
      expect(difference).toEqual(expected);
    });
  });

  describe('addition', () => {
    it('requires numeric input', () => {
      let expected = null;
      let sum = arithmetic.add(num1, name);
      expect(sum).toEqual(expected);
    });
  
    it('adds correctly', () => {
      let expected = num1 + num2;
      let sum = arithmetic.add(num1, num2);
      expect(sum).toEqual(expected);
    });
  });

  describe('multiplication', () => {
    it('requires numeric input', () => {
      let expected = null;
      let product = arithmetic.multiply(num1, name);
      expect(product).toEqual(expected);
    });
  
    it('multiplies correctly', () => {
      let expected = num1 * num2;
      let product = arithmetic.multiply(num1, num2);
      expect(product).toEqual(expected);
    });
  });

  describe('division', () => {
    it('requires numeric input', () => {
      let expected = null;
      let quotient = arithmetic.divide(num1, name);
      expect(quotient).toEqual(expected);
    });
  
    it('divides corrects', () => {
      let expected = num1/num2;
      let quotient = arithmetic.divide(num1, num2);
      expect(quotient).toEqual(expected);
    });

    it('does not divide by 0', () => {
      let expected = null;
      let quotient = arithmetic.divide(num1, 0);
      expect(quotient).toEqual(expected);
    });
  });

});
