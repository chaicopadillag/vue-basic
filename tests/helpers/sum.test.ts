// sum.test.js
import { describe } from 'node:test';
import { expect, test } from 'vitest';
import { sum, sumFromArray } from '../../src/helpers/sum';

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    const numeroUno = 1;
    const numeroDos = 2;

    const resultado = numeroUno + numeroDos;

    expect(sum(numeroUno, numeroDos)).toBe(resultado);
  });
});

describe('sumFromArray', () => {
  test('should return 0 when the array is empty', () => {
    const numeros: number[] = [];

    const resultado = 0;

    expect(sumFromArray(numeros)).toBe(resultado);
  });

  test('adds 1 + 2 + 3 + 4 to equal 10', () => {
    const numeros = [1, 2, 3, 4];

    const resultado = 10;

    expect(sumFromArray(numeros)).toBe(resultado);
  });
});
