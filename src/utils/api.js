const REQUEST_TIMEOUT = 3000;

export function mockRequest(data) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(data), REQUEST_TIMEOUT * Math.random())
  );
}
