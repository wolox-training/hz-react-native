import isArray from './utils';

export function min(...params) {
  if (params.length > 0) {
    return isArray(params[0]) ? Math.min(...params[0]) : Math.min(...params);
  }
  return undefined;
}

export function copy(param) {
  if (isArray(param)) {
    return [...param];
  }
  return { ...param };
}

export function reverseMerge(...params) {
  params[0].unshift(...params[1]);
  return params[0];
}

export function filterAttribs() {}
