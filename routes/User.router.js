import { Router } from 'express';

import { UserAuth } from '../middleware/UserAuth.js'
import { createUser, getUser, updateUser } from '../controller/indexControllers.js'

export const UserRouter = Router();

UserRouter.post('/users', createUser, UserAuth);
UserRouter.get('/users/:id', getUser);
UserRouter.put('/users/:id', updateUser, UserAuth );


