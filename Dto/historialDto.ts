import { Request as ExpressRequest } from 'express';

interface CustomRequest extends ExpressRequest {
    user: {
        email: string;
    };
}

export default CustomRequest;
