/* eslint-disable @pluralsight/general-test-imports */
// import Chai from 'chai'
import Sinon, {stubInterface as stubI, StubbedInstance as StubbedInst} from 'ts-sinon'
// import sinonChai from 'sinon-chai'
// import chaiAsPromised from 'chai-as-promised'
// import chaiSubset from 'chai-subset'

declare global {
  const sinon: Sinon.SinonStatic
  const should: Chai.Should
  // =====================================================================================
  // Not sure if this is needed, leaving this commented out as a reminder of how in a
  // another project we were getting errors from typescript.
  // the following are not used as global but this helps typescript load the needed types
  // const sinonChai: sinonChai
  // const chaiAsPromised: chaiAsPromised
  // const chaiSubset: chaiSubset
  // ==========================================================================

  const stubInterface: typeof stubI
  type StubbedInstance<T> = StubbedInst<T>
}
