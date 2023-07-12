import {Router} from 'express';
import userRegisterDTO from '#Dto/user-register.dto.js'
import userLoginDTO from '#Dto/user-login.dto.js'
import userUpdateDataDTO from '#Dto/user-update-data.dto.js'
import userUpdateEmailDTO from '#Dto/user-update-email.dto.js'
import userUpdatePasswordDTO from '#Dto/user-update-password.dto.js'
import userUnregisterDTO from '#Dto/user-unregister.dto.js'
import userJWTDTO from '#Dto/user-jwt.dto.js'
import userRegisterController from '#Controllers/user-register.controller.js'
import userLoginController from '#Controllers/user-login.controller.js'

const userRouter = Router();

userRouter.post('/register', userRegisterDTO, userRegisterController);
userRouter.post("/login", userLoginDTO,userLoginController);
//userRouter.get('profile',userJWTDTO,userProfileController);
//userRouter.patch('/update-data',userJWTDTO,userUpdateDataDTO,userUpdateDataController);
//userRouter.patch('/update-email',userJWTDTO,userUpdateEmailDTO,userUpdateEmaiController);
//userRouter.patch('/update-password',userJWTDTO,userUpdatePasswordDTO,userUpdatePasswordController);
//userRouter.delete('/unregister',userJWTDTO,userUnregisterDTO,userUnregisterController)

export default userRouter;