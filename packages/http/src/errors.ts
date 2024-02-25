export class FailedRequestError extends Error {
  constructor(status: number, message: string) {
    super(`Failed request: ${status}: ${message}`);
    this.name = 'FailedRequestError';
  }
}
