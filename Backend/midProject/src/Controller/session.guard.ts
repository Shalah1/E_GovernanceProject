import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class SessionGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
  //return request.session.email !==undefined;
    return true;
  
    // const request = context.switchToHttp().getRequest();
    // const { method } = request;
    // if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
    //   return false; // Deny access to update or insert operations
    // }
    // return true; // Allow access to other operations
  }
}
