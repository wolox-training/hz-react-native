import isArray from './utils';

export function min(param) {
  if (isArray(param)) {
    return Math.min(...param);
  }
  return param;
}

export function copy() {

}
