# Memorable Norwegian Passwords for Node.js

[![Build status](https://img.shields.io/wercker/ci/56ae460368076eba3b1a5574.svg "Build status")](https://app.wercker.com/project/bykey/31a8a940161845d325b2038039ccc99b)
[![NPM downloads](https://img.shields.io/npm/dm/passord.svg "NPM downloads")](https://www.npmjs.com/package/passord)
[![NPM version](https://img.shields.io/npm/v/passord.svg "NPM version")](https://www.npmjs.com/package/passord)
[![Node version](https://img.shields.io/node/v/passord.svg "Node version")](https://www.npmjs.com/package/passord)
[![Dependency status](https://img.shields.io/david/Starefossen/node-passord.svg "Dependency status")](https://david-dm.org/Starefossen/node-passord)

Next time you need to suggest or generate a password for a user. Instead of
generating a completely random string of symbols you should generate something
the user will actually be able to remember but still provide enough security.

```js
> const passord = require('passord');
>
> passord()      // VettskremtLokale244
> passord()      // Fremmednordmann658
> passord()      // Klarbakgrunn19
> passord()      // Identiskbank744
```

The schema behind the generated password is the following:

```
RANDOM ADJECTIVE + RANDOM NOUN + RANDOM NUMBER
```

## Requirements

* Node.JS >= v4.0.0

## Install

```
$ npm install passord --save
```

## Usage

```js
const passord = require('passord');
```

### Random Password

Generate a random password on the following form:

```js
/^[a-zæøåA-ZÆØÅ]+[0-9]{1,3}$/
```

```js
passord();      // underligUnge864
passord();      // VarsomOrd393
passord();      // ForelsketOrd556
passord();      // varmDag284
```

### Random Codeword

Generate a random codeword on the following form:

```js
/^[A-ZÆØÅ]+ [A-ZÆØÅ]$/
```

```js
passord.codeword();    // SLØV BEHOV
passord.codeword();    // FLITTIG BILDE
passord.codeword();    // STINN TILBUD
passord.codeword();    // RU ÅRSAK
```

### Custom Dictionaries

By default this module uses a dictionary of 182 adjectives and 190 nouns. These
dictionaries can easily be replaced by your own if you need to.

```js
passord.dictionary.noun = [ ... ];
passord.dictionary.adjective = [ ... ];
```

### Combinations

Returns the number of unique password combinations possible. Over 210 million
with default dictionaries.

```js
passord.combinations(); // 216 944 000
```

This number will automatically be recalculated if you use custom dictionaries:

```js
passord.dictionary.adjectiv = [ 'stor', 'listen' ];
passord.dictionary.noun = [ 'fotball', 'tennisball', 'golfball' ];

passord.combinations(); // 24 000
```

## [MIT Licensed](https://github.com/Starefossen/node-passord/blob/master/LICENSE)
