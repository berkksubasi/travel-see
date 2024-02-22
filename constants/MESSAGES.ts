const VALIDATION_MESSAGES = {
  // REGISTER
  usernameRequired: 'Username Required',
  emailRequired: 'Email Address Required',
  phoneRequired: 'Phone Number Required',
  passwordRequired: 'Password Required',
  passwordConfirmRequired: 'You Need to Confirm Your Password',
  passwordMatchRequired: "Passwords Don't Match",
}

const KEY_MESSAGES = {
  "username": "Username",
  "email": "E-Mail",
  "phone": "Phone",
  "password": "Password",
  "passwordConfirm": "Password Confirm",
}

const SUCCESS_MESSAGES = {
  registerSuccess: 'Your Account Has Been Created',
  loginSuccess: 'Login completed successfully',

}


const ERROR_MESSAGES = {
  loginError: 'The username or password is incorrect.',
  usernameError: 'Username already exists.',
  emailError: 'Please enter a correct e-mail address.',
}

export default { KEY_MESSAGES, VALIDATION_MESSAGES, SUCCESS_MESSAGES, ERROR_MESSAGES };


