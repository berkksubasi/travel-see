import { IUser } from "../../interfaces";

interface ILoginCredentials extends Pick<IUser, "password"> {
  identifier?: IUser["email"] | IUser["username"] | IUser["phone"]

}

export default ILoginCredentials;
