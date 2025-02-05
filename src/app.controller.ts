import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  @GrpcMethod('AuthService', 'ValidateUser')
  validateUser(data: { email: string; password: string }) {
    if (data.email === 'admin@example.com' && data.password === 'password') {
      return { isValid: true, userId: '12345' };
    }
    return { isValid: false, userId: '' };
  }

  @GrpcMethod('AuthService', 'RegisterUser')
  registerUser(data: { email: string; password: string }) {
    return { userId: '67890', message: 'User registered successfully' };
  }
}
