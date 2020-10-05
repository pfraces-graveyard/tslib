# onGlobal

Wait for a single or multiple global variables to be defined with an
Observable-based API

## Prerequisites

The current implementation is based on [rxjs](https://github.com/ReactiveX/rxjs)

```
npm install rxjs
```

## Installation

```
npm install @tslib/rx-on-global
```

## Usage

```ts
import { onGlobal, onGlobals } from '@tslib/rx-on-global';

// wait for a single global variable
onGlobal('google').subscribe(() => {
  // google is available as a global variable
});

// wait for multiple globals
onGlobals(['foo', 'bar']).subscribe(() => {
  // foo and bar are available as global variables
});
```
