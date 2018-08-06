import isArray from './utils';

export function min(...params) {
  return isArray(params[0]) ? Math.min(...params[0]) : Math.min(...params);
}

export function copy() {

}
