'use strict';

const read = require('fs').readFileSync;

function capitalize(string) {
  if (Math.floor(Math.random() * 2) === 0) {
    return string;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

function word(type) {
  const i = Math.floor(Math.random() * module.exports.dictionary[type].length);

  return capitalize(module.exports.dictionary[type][i]);
}

function number() {
  return Math.floor(Math.random() * 1000);
}

module.exports = function password() {
  return word('adjectiv') + word('noun') + number();
};

module.exports.codeword = function codeword() {
  return word('adjectiv').toUpperCase() + ' ' + word('noun').toUpperCase();
};

module.exports.combinations = function combinations() {
  return module.exports.dictionary.adjectiv.length * 2
       * module.exports.dictionary.noun.length * 2
       * 1000;
};

module.exports.dictionary = {
  adjectiv: read('./adjektiv.txt', 'utf8').split('\n'),
  noun: read('./substantiv.txt', 'utf8').split('\n'),
};
