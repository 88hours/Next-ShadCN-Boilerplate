export class HelloWorldService {
  private static message: string = '';

  static setMessage(msg: string) {
    this.message = msg;
  }

  static getMessage(): string {
    return this.message;
  }
} 