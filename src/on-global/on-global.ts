import { interval, forkJoin } from 'rxjs';
import { map, filter, first, timeout } from 'rxjs/operators';

interface IWindow {
  [key: string]: any;
}

declare const window: IWindow;

export interface IOnGlobalOptions {
  interval: number;
  timeout: number;
}

export const onGlobal = function (global: string, options?: IOnGlobalOptions) {
  const defaults: IOnGlobalOptions = {
    interval: 500,
    timeout: 30000,
  };

  const config: IOnGlobalOptions = { ...defaults, ...options };

  return interval(config.interval)
    .pipe(map(() => window[global]))
    .pipe(filter((val) => typeof val !== 'undefined'))
    .pipe(first())
    .pipe(timeout(config.timeout));
};

export const onGlobals = function (
  globals: string[],
  options?: IOnGlobalOptions
) {
  return forkJoin(globals.map((global) => onGlobal(global, options)));
};
