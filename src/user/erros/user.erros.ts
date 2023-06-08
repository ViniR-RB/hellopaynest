import { HttpException, HttpStatus } from '@nestjs/common';
export class UserError extends HttpException {
  constructor(message: string, statusCode: HttpStatus) {
    super(message, statusCode);
  }
}

export class UserNotFound extends UserError {
  constructor(message: string, statusCode: HttpStatus) {
    super(message, statusCode);
  }
}
export class UserAlreadyExists extends UserError {
  constructor(message: string, statusCode: HttpStatus) {
    super(message, statusCode);
  }
}
