class TestCase {
  constructor(name) {
    this.name = name;
  }

  run() {
    const method = this[this.name].bind(this);
    method();
  }
}

class WasRun extends TestCase {
  constructor(name) {
    super(name);
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

  testRunning() {
    const test = new WasRun('testMethod');
    console.assert(test.wasRun === false);
    test.run();
    console.assert(test.wasRun === true);
  }
}

new TestCaseTest('testRunning').run();
