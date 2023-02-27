import { Injectable, NestMiddleware } from '@nestjs/common';
import {  Response, NextFunction } from 'express';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { UserRequest } from './UserRequest';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(private httpService: HttpService) {}

  use(req: UserRequest, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(401).send({ message: 'Unauthorized' });
      return;
    }

    const authToken = authHeader.split(' ')[1];

    this.httpService
      .get('https://my.auth.service/check-token', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .pipe(
        map((response) => response.data),
      )
      .subscribe(
        (result) => {
          if (result.valid) {
            req.user = result.user;
            next();
          } else {
            res.status(401).send({ message: 'Unauthorized' });
          }
        },
        (error) => {
          res.status(500).send({ message: 'Internal server error' });
        },
      );
  }
}
