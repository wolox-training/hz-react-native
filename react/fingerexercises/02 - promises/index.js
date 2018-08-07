// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(Date.now() - start), time);
  });
}

export function asyncDelay() {

}
