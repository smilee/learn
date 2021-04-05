class TestCase {
  constructor(name) {
    this.name = name;
  }

  setUp() { }

  run() {
    this.setUp();
    const method = this[this.name].bind(this);
    method();
  }
}

class WasRun extends TestCase {
  constructor(name) {
    super(name);
    this.wasSetUp = false;
    // this.wasRun;
  }

  setUp() {
    this.wasSetUp = true;
    this.wasRun = false;
  }

  testMethod() {
    this.wasRun = true;
  }
}

class TestCaseTest extends TestCase {
  constructor(name) {
    super(name)
  }

  testSetUp() {
    const test = new WasRun('testMethod');
    test.run();
    console.assert(test.wasSetUp);
  }

  testRunning() {
    const test = new WasRun('testMethod');
    test.run();
    console.assert(test.wasRun);
  }
}

new TestCaseTest('testSetUp').run();
new TestCaseTest('testRunning').run();
