const VALIDATION_MESSAGES = {
  // REGISTER
  usernameRequired: 'Kullanıcı Adı Gerekli',
  emailRequired: 'E-posta Adresi Gerekli',
  phoneRequired: 'Telefon Numarası Gerekli',
  passwordRequired: 'Şifre Gerekli',
  passwordConfirmRequired: 'Şifrenizi Onaylamanız Gerekli',
  passwordMatchRequired: 'Şifreler Eşleşmiyor',
}

const KEY_MESSAGES = {
  "username": "Kullanıcı Adı",
  "email": "E-posta Adresi",
  "phone": "Telefon Numarası",
  "password": "Şifre",
  "passwordConfirm": "Şifre Onayı",
}

const SUCCESS_MESSAGES = {
  registerSuccess: 'Hesabınız Oluşturuldu',
  loginSuccess: 'Giriş Başarı ile tamamlandı',

}


const ERROR_MESSAGES = {
  loginError: 'Kullanıcı adı ya da şifre hatalı.',
  usernameError: 'Kullanıcı adı zaten mevcut.',
  emailError: 'Doğru bir e-posta adresi giriniz.',
}

export default { KEY_MESSAGES, VALIDATION_MESSAGES, SUCCESS_MESSAGES, ERROR_MESSAGES };


