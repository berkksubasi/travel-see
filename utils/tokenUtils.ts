import { IUser } from "@interfaces";
import { JwtPayload, jwtDecode } from "jwt-decode";

type Modify<T, R> = Omit<T, keyof R> & R;

type IDecode = Modify<JwtPayload, {
  sub: IUser
}>
export const getTokenDetails = (token: string) => {

  let userInfo = null
  // check token is valid



  if (token) {
    const decoded = jwtDecode<IDecode>(token);
    userInfo = decoded.sub
  }


  return userInfo

}

