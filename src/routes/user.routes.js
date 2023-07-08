import {Router} from 'express';

const userRouter = Router();

userRouter.post('/registre');
userRouter.post("/login");
userRouter.get('profile');
userRouter.patch('/update-data');
userRouter.patch('/update-email');
userRouter.patch('/update-password');
userRouter.delete('/unregister')

export default userRouter;