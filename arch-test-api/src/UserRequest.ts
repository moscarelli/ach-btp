
import { Request } from 'express';

export interface UserRequest extends Request {
    user?: {
        id: string;
        name: string;
        email: string;
      };
      headers: {
        authorization?: string;
      };
}

