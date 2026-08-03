# For Loop in JavaScript

The **for loop** helps you repeat a block of code a specific number of times.

## ICU - The three parts of a for loop

Every for loop has three parts:

| Part | What it does | Example |
|------|--------------|---------|
| **I** - Init | Sets the starting value | `let i = 0` |
| **C** - Condition | Runs the loop while this is `true` | `i < 10` |
| **U** - Update | Changes the value after each run | `i++` |

## Basic syntax

```js
for (INIT; CONDITION; UPDATE) {
    // code to repeat
}
```

## Example: counting 0 to 9

```js
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

**Output:**

```
0
1
2
3
4
5
6
7
8
9
```

## Increment operators: `i++` vs `++i`

Both work the same inside a for loop:

```js
// Same output as the example above
for (let i = 0; i < 10; ++i) {
    console.log(i);
}
```

- `i++` is **post-increment** - returns the old value, then adds 1.
- `++i` is **pre-increment** - adds 1 first, then returns the new value.

> **Note:** In a for loop's update part, the difference doesn't matter because the result is not used. Both print `0` to `9`.
