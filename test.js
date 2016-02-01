'use strict';

const assert = require('assert');
const passord = require('.');

describe('passord()', () => {
  it('returns random password', () => {
    assert(/^[a-zæøåA-ZÆØÅ]+[0-9]{1,3}$/.test(passord()));
  });
});

describe('codeword()', () => {
  it('returns random codeword', () => {
    assert(/^[A-ZÆØÅ]+ [A-ZÆØÅ]+$/.test(passord.codeword()));
  });
});

describe('combinations()', () => {
  it('returns number of combinations', () => {
    assert.equal(passord.combinations(), 210816000);
  });
});

describe('dictionary', () => {
  it('allows custom dictionary', () => {
    passord.dictionary.adjectiv = ['stor', 'listen'];
    passord.dictionary.noun = ['fotball', 'tennisball', 'golfball'];

    assert.equal(passord.combinations(), 24000);
  });
});
