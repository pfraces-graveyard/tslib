# onGlobal

Wait for a single or multiple global variables to be defined with a
Promise-based API

## Installation

```
git clone https://github.com/wardays/tslib
```

## Usage

```ts
import { onGlobal, onGlobals } from '@wardays/on-global';

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
onGlobals(['foo', 'bar', 'qux'], { timeout: 10000 })
  .then(function () {
    // `foo`, `bar` and `qux` are available as global variables
    log(`foo: ${foo}`);
    log(`bar: ${bar}`);
    log(`qux: ${qux}`);
  })
  .catch(function (err) {
    // timeout error
    log(`onGlobals error: ${err}`);
  });
```

Running example at <https://codesandbox.io/s/on-global-bhksp>
