import { NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { HttpService } from '@nestjs/axios';
import { UserRequest } from './UserRequest';
export declare class AuthenticationMiddleware implements NestMiddleware {
    private httpService;
    constructor(httpService: HttpService);
    use(req: UserRequest, res: Response, next: NextFunction): void;
}
