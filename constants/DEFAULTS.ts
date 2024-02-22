//Interfaces
import { IRegisterCredentials, IUserValidation, ILoginCredentials, IResetPassword } from "@interfaces";
//Context
import { IRegisterState } from "@context";
import IContactInformations from "@interfaces/user/IContactInformations";

// AUTH

// Register
const initialRegisterUser: IRegisterCredentials = {
  username: '',
  email: '',
  phone: '',
  password: '',
  passwordConfirm: '',
  otp: ""
}

const initialContactInformations: IContactInformations = {
  contactInfos: [{ type: "phone", value: "" }, { type: "email", value: "" }],
  socialInfos: [{ type: "facebook", value: "" }, { type: "instagram", value: "" }, { type: "x", value: "" }, { type: "website", value: "" }],
}


const initialResetPassword: IResetPassword = {
  email: 'Oguztahasancaktar@gmail.com',
  password: '12341234',
  passwordConfirm: '12342134',
  otp: "1234123"
}

const initialUserValidations: IUserValidation = {
  email: false,
  username: false,
  password: false,
  passwordConfirm: false,
  phone: false,
  errorMessage: ''
}


const initialRegisterState: IRegisterState = {
  data: initialRegisterUser,
  validation: initialUserValidations,
  step: 0
}


// Login
const initialLoginUser: ILoginCredentials = {
  identifier: '',
  password: '',
}




export default {
  initialContactInformations,
  initialResetPassword,
  // Register
  initialRegisterUser,
  initialUserValidations,
  initialRegisterState,
  // Login
  initialLoginUser,
}
