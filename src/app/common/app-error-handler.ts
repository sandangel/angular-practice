import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(error: any) {
    alert('An unexpected error occurred.');
    console.log('We have an unexpected error:', error);
  }
}
