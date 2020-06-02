interface IGlobalObject {
  [key: string]: any;
}

declare const globalThis: IGlobalObject;
declare const self: IGlobalObject;
declare const window: IGlobalObject;
declare const global: IGlobalObject;

export const globalObject = (function () {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  throw new Error('Unable to locate global object');
})();
