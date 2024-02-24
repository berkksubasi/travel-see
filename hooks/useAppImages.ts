import { useMemo } from 'react'

//IMAGES
// import qrWizardBG from '@assets/img/qr-wizard-bg.png'
// import logoLight from '@assets/img/logo-light.png'
// import pageIndicator from '@assets/img/page-indicator.png'
// import contactInformation from '@assets/img/contact-information.png'
// import addressDetails from '@assets/img/address-details.png'
// import welcomeBg from '../../assets/img/welcome-bg.png'
// import profilePattern from '@assets/img/profile-pattern.png'
// import firstPageLogo from '@assets/img/first-page-logo.png'

const useAppImages = () => {
  const ImageObjects = useMemo(() => {
    return {
      logoLight: require("@/assets/images/adaptive-icon.png"),
      // logoLight,
      // pageIndicator,
      // contactInformation,
      // addressDetails,
      welcomeBg: require("@/assets/images/welcome-bg.png"),
      // profilePattern,
      // firstPageLogo,
      bigCar: require("@/assets/images/placeholder/big-car.png"),
      smallCar: require("@/assets/images/placeholder/small-car.png"),
      smallLogo: require("@/assets/images/placeholder/small-logo.png"),
      defaultUser: require("@/assets/images/placeholder/default-user.png"),
      userAvatar: require("@/assets/images/placeholder/user-avatar.png"),
      filterFrame: require("@/assets/images/filter-frame.png"),
      comingSoon: require("@/assets/images/coming-soon.png"),

      //USER_PHOTOS
      user1: require("@/assets/images/userPhoto/1.png"),
      user2: require("@/assets/images/userPhoto/2.png"),
      user3: require("@/assets/images/userPhoto/3.png"),
      user4: require("@/assets/images/userPhoto/4.png"),
      user5: require("@/assets/images/userPhoto/5.png"),
      user6: require("@/assets/images/userPhoto/6.png"),
      user7: require("@/assets/images/userPhoto/7.png"),
      user8: require("@/assets/images/userPhoto/8.png"),

      //FLAGS
      turkey: require("@/assets/images/flags/turkey.png"),
      usa: require("@/assets/images/flags/usa.png"),
    }
  }, [])

  return ImageObjects
}

export default useAppImages
