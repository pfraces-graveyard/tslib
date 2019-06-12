/**
 * Source: <https://raw.githubusercontent.com/simov/deep-copy/master/index.js>
 */

function add(copy, key, value) {
  if (copy instanceof Array) {
    copy.push(value);
    return copy[copy.length - 1];
  }

  if (copy instanceof Object) {
    copy[key] = value;
    return copy[key];
  }
}

function walk(target, copy) {
  for (const key in target) {
    if (!target.hasOwnProperty(key)) {
      continue;
    }

    const obj = target[key];

    if (obj instanceof Date) {
      const value = new Date(obj.getTime());
      add(copy, key, value);
    } else if (obj instanceof Function) {
      const value = obj;
      add(copy, key, value);
    } else if (obj instanceof Array) {
      const value = [];
      const last = add(copy, key, value);
      walk(obj, last);
    } else if (obj instanceof Object) {
      const value = {};
      const last = add(copy, key, value);
      walk(obj, last);
    } else {
      const value = obj;
      add(copy, key, value);
    }
  }
}

export function deepCopy(target) {
  if (/number|string|boolean/.test(typeof target)) {
    return target;
  }

  if (target instanceof Date) {
    return new Date(target.getTime());
  }

  const copy = target instanceof Array ? [] : {};
  walk(target, copy);
  return copy;
}
