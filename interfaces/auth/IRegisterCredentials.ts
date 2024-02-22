import { IUser } from "..";

interface IRegisterCredentials extends Pick<IUser, "username" | "email" | "password" | "phone"> {
  passwordConfirm: string;
  otp: string;
}

export default IRegisterCredentials;
