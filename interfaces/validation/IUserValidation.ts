interface IUserValidation {
  username: boolean
  email: boolean
  phone: boolean
  password: boolean
  passwordConfirm: boolean
  errorMessage: string
}

export default IUserValidation
