const chai = require(`chai`)
const sinon = require(`ts-sinon`).default
const sinonChai = require(`sinon-chai`)
const sinonAsPromised = require(`chai-as-promised`)
const chaiSubset = require(`chai-subset`)

chai.use(sinonChai)
chai.use(sinonAsPromised)
chai.use(chaiSubset)

// Add some names to the global namespace to make TypeScript happy 
// @ts-ignore
global.should = chai.should()
// @ts-ignore
global.stubInterface = sinon.stubInterface