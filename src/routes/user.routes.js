import {Router} from 'express';
import userRegisterDTO from '#Dto/user-register.dto.js'
import userLoginDTO from '#Dto/user-login.dto.js'
import userUpdateDataDTO from '#Dto/user-update-data.dto.js'
import userUpdateEmailDTO from '#Dto/user-update-email.dto.js'
import userUpdatePasswordDTO from '#Dto/user-update-password.dto.js'

const userRouter = Router();

userRouter.post('/register', userRegisterDTO);
userRouter.post("/login", userLoginDTO);
userRouter.get('profile');
userRouter.patch('/update-data',userUpdateDataDTO);
userRouter.patch('/update-email',userUpdateEmailDTO);
userRouter.patch('/update-password',userUpdatePasswordDTO);
userRouter.delete('/unregister')

export default userRouter;