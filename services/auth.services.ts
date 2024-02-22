//Interfaces
import axiosInstance from "@configuration/axios.instance";
import { ILoginCredentials, IRegisterCredentials } from "@interfaces/auth";
//Config




const sendVerifyEmailOTP = async (email: IRegisterCredentials["email"]) => {
  const response = await axiosInstance('/otp/verify/email', {
    method: 'POST',
    data: { email }
  });

  return response.data;
}


const sendResetPasswordOTP = async (email: IRegisterCredentials["email"]) => {
  const response = await axiosInstance('/otp/reset/password', {
    method: 'POST',
    data: { email }
  });

  return response.data;
}


const login = async (credentials: ILoginCredentials) => {
  const response = await axiosInstance('/auth/login', {
    method: 'POST',
    data: credentials
  });

  return response.data;
}


const register = async (credentials: IRegisterCredentials) => {
  const response = await axiosInstance('/auth/register', {
    method: 'POST',
    data: credentials
  });

  return response.data;
}

const logout = async () => {
  const response = await axiosInstance('/auth/logout', {
    method: 'POST'
  });

  return response.data;
}

const authServices = {
  sendVerifyEmailOTP,
  sendResetPasswordOTP,
  login,
  register,
  logout
}

export default authServices;
