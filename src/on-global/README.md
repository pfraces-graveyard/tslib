# onGlobal

Wait for a single or multiple global variables to be defined with a
Promise-based API

## Installation

```
npm install @tslib/on-global
```

## Usage

```ts
import { onGlobal, onGlobals } from '@tslib/on-global';

// Wait for a single global variable
onGlobal('myGlobal')
  .then(function () {
    // `myGlobal` is available as a global variable
    console.log(`myGlobal: ${myGlobal}`);
  })
  .catch(function (err) {
    // timeout error
    console.log(`onGlobal error: ${err}`);
  });

// Wait for multiple globals
onGlobals(['foo', 'bar', 'qux'])
  .then(function () {
    // `foo`, `bar` and `qux` are available as global variables
    console.log(`foo: ${foo}`);
    console.log(`bar: ${bar}`);
    console.log(`qux: ${qux}`);
  })
  .catch(function (err) {
    // timeout error
    console.log(`onGlobals error: ${err}`);
  });
```

Running example at <https://codesandbox.io/s/on-global-bhksp>

## API

```ts
onGlobal(target: string, options?: IOptions): Promise<void>
onGlobals(targets: string[], opts?: IOptions): Promise<void>
```

### Default options

```ts
const defaults: IOptions = {
  interval: 500,
  timeout: 30000,
};
```
