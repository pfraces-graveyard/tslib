# classNames

Generate strings for its use in the `class` attribute of DOM elements. Specially
useful for React `className` attribute

## Installation

```
npm install @tslib/class-names
```

## Usage

```ts
import { classNames } from '@tslib/class-names';

classNames('foo'); // "foo"
classNames('foo', 'bar'); // "foo bar"
classNames({ foo: true, bar: false, qux: true }); // "foo qux"
classNames({ foo: true }, { bar: true }); // "foo bar"
classNames('foo', { bar: false, qux: true }); // "foo qux"
```

## Usage with Vanilla JS

```ts
import { classNames } from '@wardays/class-names';

const target = document.getElementById('target');
target.className = classNames({ foo: true, bar: false });
```

## Usage with React

```tsx
import { classNames } from '@wardays/class-names';

export const MyComponent = () => (
  <div className={classNames({ foo: true, bar: false })} />
);
```

# References

- <https://github.com/JedWatson/classnames>
- <https://github.com/lukeed/clsx>
