# December 29, 2020

## Order of operations

Logical AND has precedence over logical OR.

## Queues in JavaScript

Queues can be easily be implemented in JavaScript using either the push and shift or unshift and pop methods of the array object. However, performance issues may arise due to the use of the array object.

### Using `push` and `shift`
```javascript
const queue = [];

// enqueue
queue.push(1);

// dequeue
queue.shift();
```

### Using `unshift` and `pop`
```javascript
const queue = [];

// enqueue
queue.unshift(1);

// dequeue
queue.pop();
```

## Stacks in JavaScript

Stacks can be easily be implemented in JavaScript using the push and pop methods of the array object, although performance issues may arise due to the use of the array object.

```javascript
const stack = [];

// push
stack.push(1);

// pop
stack.pop();
```

## References
- [Precedence and order of evaluation](https://docs.microsoft.com/en-us/cpp/c-language/precedence-and-order-of-evaluation?view=msvc-160)
