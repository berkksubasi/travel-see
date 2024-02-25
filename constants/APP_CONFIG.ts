const APP_ROUTES = {
  // Public
  WELCOME: 'index',
  SIGN_IN: 'signIn',
  SIGN_UP: 'signUp',

  // MAIL: '/verifyMail',
  // RESET_PASSWORD: '/login/reset',
  // FORGET_PASSWORD: '/login/forget',


  // Private
  SCANNED_QR: 'scannedQr',
  SEARCH: 'home/search',
  SEARCH_FILTER: 'home/searchFilter',
  DELETED: 'home/deleted',
  ACTIVE: 'home/active',
  INACTIVE: 'home/inactive',
  // CHAT
  CHAT_BOARD: 'chat/chatBoard',


  // PROFILE
  PROFILE: {
    FOLLOWER: 'profile/follower',
  },
  // TABS
  TABS: {
    HOME: 'home',
    SCAN: 'scan',
    MAP: 'map',
    CHAT: 'chat',
    PROFILE: 'profile',
  },

  // FORMS
  FORMS: {
    PROFILE_INFORMATIONS_STEP: 'forms/addressInformationsStep',
    CONTACT_INFORMATIONS_STEP: 'forms/contactInformationsStep',
    ADDRESS_INFORMATIONS_STEP: 'forms/personalInformationsStep',

  },

  SETTINGS: 'settings/index',
  SETTINGS_ACCOUNT: 'settings/accountSettingsIndex',
  UPDATE_INFO: 'settings/updateInfoIndex',
  CONNECTIONS_SOURCE: 'settings/connectionsSource',
  PRIVACY_POLICY: 'settings/privacyPolicy',
  CONTACT_US: 'settings/contactUs',
  CHANGE_PASSWORD: 'settings/changePassword',
  // UPDATE_PERSONAL_INFO: '/(app)/settings/updatePersonalInformation',
} as const

const APP_PATHS = {
  // Public
  WELCOME: '/',
  SIGN_IN: '/signIn',
  SIGN_UP: '/signUp',

  // MAIL: 'verifyMail',
  // RESET_PASSWORD: 'login/reset',
  // FORGET_PASSWORD: 'login/forget',



  // TABS
  TABS: {
    HOME: '/(tabs)/home',
    SCAN: '/(private)/scan',
    MAP: '/(tabs)/map',
    CHAT: '/(tabs)/chat',
    PROFILE: '/(tabs)/profile',
  },


  // FORMS
  FORMS: {
    PROFILE_INFORMATIONS_STEP: '/(private)/forms/personalInformationsStep',
    CONTACT_INFORMATIONS_STEP: '/(private)/forms/contactInformationsStep',
    ADDRESS_INFORMATIONS_STEP: '/(private)/forms/addressInformationsStep',

  },

  // HOME
  ACTIVE: '/(private)/home/active',
  INACTIVE: '/(private)/home/inactive',
  DELETED: '/(private)/home/deleted',

  SETTINGS: '/settings',
  SETTINGS_ACCOUNT: '/settings/accountSettingsIndex',
  UPDATE_INFO: '/settings/updateInfoIndex',
  CONNECTIONS_SOURCE: '/settings/connectionsSource',
  PRIVACY_POLICY: '/settings/privacyPolicy',
  CONTACT_US: '/settings/contactUs',
  CHANGE_PASSWORD: '/settings/changePassword',
  ABOUT: '/settings/about',
  SEARCH: '/(private)/home/search',
  SEARCH_FILTER: '/(private)/home/searchFilter',
  SCANNED_QR: '/(private)/scannedQr',

  // PROFILE
  FOLLOWER: '/(private)/profile/follower',
  BOOKMARK: '/(private)/profile/bookmark',
  SINGLE_POST: '/(private)/profile/singlePost',

  // CHAT
  CHAT_BOARD: '/(private)/chat/chatRoom',

  // UPDATE_PERSONAL_INFO: '/(app)/settings/updatePersonalInformation',

  EDIT_QR: '/(private)/thirdPage',
} as const

const APP_CONFIG = {
  APP_ROUTES,
  APP_PATHS,
} as const

export default APP_CONFIG
