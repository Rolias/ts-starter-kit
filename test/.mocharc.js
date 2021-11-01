module.exports = {
  "bail":true,
  "verbose": true,
  "reporter": "spec",
  "timeout": 5000,
  "require": [
    "chai",
    "sinon",
    "sinon-chai",
    `chai-as-promised`,
    "ts-node/register",
    "source-map-support/register",
    'chai/register-should',
    `test/mocha-init`
    ],
    recursive: true,
}