import { IRegisterCredentials, IUser } from "..";

interface IResetPassword extends Pick<IRegisterCredentials, "email" | "password" | "passwordConfirm" | "otp"> {
  oldPassword: string;
}

export default IResetPassword;
