// Just want to test that debug active file works properly

function testSetup() {
  return {
    a: 1,
    b: 2,
  }
}

describe.skip(`Simple test that launch.json does what is expected`, () => {
  it(`Test should run and auto import all needed test stuff`, () => {
    const setup = testSetup()
    setup.a.should.eql(1)
    setup.b.should.not.eql(1)
  })
})
