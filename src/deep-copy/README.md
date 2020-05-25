# deepCopy

## Installation

```
npm install @wardays/deep-copy
```

## Usage

```ts
import { deepCopy } from '@wardays/deep-copy';
const source = { foo: { bar: 123 } };
const target = deepCopy(source);

console.log(source === target); // outputs `false`;
console.log(source.foo === target.foo); // outputs `false`;
console.log(source.foo.bar === target.foo.bar); // outputs `true`;
```
