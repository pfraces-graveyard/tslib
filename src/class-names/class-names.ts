const identity = (x) => x;
const isString = (value) => typeof value === 'string';
const extend = (...objs) => objs.reduce((acc, obj) => ({ ...acc, ...obj }));
const stringToClassMap = (string) => ({ [string]: true });

const stringTransform = (transform) => (value) =>
  isString(value) ? transform(value) : value;

const classMapToString = (classMap) =>
  Object.keys(classMap)
    .filter((className) => classMap[className])
    .join(' ');

export const classNames = (...defs) =>
  classMapToString(
    extend(...defs.filter(identity).map(stringTransform(stringToClassMap)))
  );
