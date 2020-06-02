import { globalObject } from './global-object';

export interface IOptions {
  interval?: number;
  timeout?: number;
}

export function onGlobal(target: string, options?: IOptions): Promise<void> {
  const defaults: IOptions = {
    interval: 500,
    timeout: 30000,
  };

  const config: IOptions = { ...defaults, ...options };

  let interval: ReturnType<typeof setInterval>;
  let timeout: ReturnType<typeof setTimeout>;

  const clearTimers = function () {
    clearInterval(interval);
    clearTimeout(timeout);
  };

  return new Promise(function (resolve, reject) {
    interval = setInterval(function () {
      if (typeof globalObject[target] !== 'undefined') {
        clearTimers();
        resolve(globalObject[target]);
      }
    }, config.interval);

    timeout = setTimeout(function () {
      clearTimers();
      reject(`Unable to locate ${target} in the global object`);
    }, config.timeout);
  });
}

export function onGlobals(targets: string[], opts?: IOptions): Promise<void> {
  return Promise.all(
    targets.map((target) => onGlobal(target, opts))
  ).then(() => {});
}
