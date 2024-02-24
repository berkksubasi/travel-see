import React from 'react';
import type {ColorValue, TextStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {GetProps, getTokenValue, SizeTokens, Token} from 'tamagui';
import APP_COLORS from '@constants/APP_COLORS';
import {useThemeSession} from '@provider/ThemeSessionProvider';
//Alert
import ErrorIcon from './react/alert/Error';
import SuccessIcon from './react/alert/Success';
import WarningIcon from './react/alert/Warning';
//Custom
import AccountCustomIcon from './react/custom/Account';
import AddCustomIcon from './react/custom/AddCustom';
import BlockUserCustomIcon from './react/custom/BlockUser';
import ComingSoon from './react/custom/ComingSoon';
import DeleteAccountCustomIcon from './react/custom/DeleteAccount';
import DeleteMessageCustomIcon from './react/custom/DeleteMessage';
import DeleteQr from './react/custom/DeleteQr';
import EditCustomIcon from './react/custom/EditCustom';
import EmptyIndicator from './react/custom/EmptyIndicator';
import KeyCustomIcon from './react/custom/KeyCustom';
import MailCustomIcon from './react/custom/MailCustom';
import PhoneCustomIcon from './react/custom/PhoneCustom';
import SelfLogo from './react/custom/SelfLogo';
import SettingsCustomIcon from './react/custom/SettingsCustom';
import SupportCustomIcon from './react/custom/Support';
import AdIcon from './react/in-app/Ad';
import AddUser from './react/in-app/AddUser';
import BlockIcon from './react/in-app/Block';
import BookmarkIcon from './react/in-app/Bookmark';
import BookmarkFillIcon from './react/in-app/BookmarkFill';
import CalendarIcon from './react/in-app/Calendar';
import CameraIcon from './react/in-app/Camera';
import Capa_1 from './react/in-app/Capa_1';
import CheckIcon from './react/in-app/Check';
import CheckCircleIcon from './react/in-app/CheckCircle';
import ChevronDownIcon from './react/in-app/ChevronDown';
import ChevronLeftIcon from './react/in-app/ChevronLeft';
import ChevronRightIcon from './react/in-app/ChevronRight';
import ChevronUpIcon from './react/in-app/ChevronUp';
import CloseIcon from './react/in-app/Close';
import ConnectIcon from './react/in-app/Connect';
import CrossCircleIcon from './react/in-app/CrossCircle';
import DeleteIcon from './react/in-app/Delete';
import DeliveredIcon from './react/in-app/Delivered';
import EditIcon from './react/in-app/Edit';
import EmptyIcon from './react/in-app/Empty';
import FAQIcon from './react/in-app/FAQ';
import Filter from './react/in-app/Filter';
import FlashIcon from './react/in-app/Flash';
import GalleryIcon from './react/in-app/Gallery';
import HideIcon from './react/in-app/Hide';
import KeyIcon from './react/in-app/Key';
import Layer_1 from './react/in-app/Layer_1';
import LocationIcon from './react/in-app/Location';
import LockIcon from './react/in-app/Lock';
import LogoutIcon from './react/in-app/Logout';
import MailIcon from './react/in-app/Mail';
import MailFillIcon from './react/in-app/MailFill';
import NoFlashIcon from './react/in-app/NoFlash';
import NotifyIcon from './react/in-app/Notify';
import OptionIcon from './react/in-app/Option';
import PhoneIcon from './react/in-app/Phone';
import PhoneFillIcon from './react/in-app/PhoneFill';
import PrivacyIcon from './react/in-app/Privacy';
import QRIcon from './react/in-app/QR';
import RemoveUser from './react/in-app/RemoveUser';
import ScanRadius from './react/in-app/ScanRadius';
import Secure from './react/in-app/Secure';
import SendIcon from './react/in-app/Send';
import SentIcon from './react/in-app/Sent';
import SettingsIcon from './react/in-app/Settings';
import Share from './react/in-app/Share';
import SmartphoneIcon from './react/in-app/Smartphone';
import SortIcon from './react/in-app/Sort';
import StoreIcon from './react/in-app/Store';
import SupportIcon from './react/in-app/Support';
import SwitchCameraIcon from './react/in-app/SwitchCamera';
import TagIcon from './react/in-app/Tag';
import TechnicalIcon from './react/in-app/Technical';
import ThumbsUpFill from './react/in-app/ThumbsUpFill';
import ThumbUp from './react/in-app/ThumbUp';
import TopicIcon from './react/in-app/Topic';
import UploadIcon from './react/in-app/Upload';
import UserIcon from './react/in-app/User';
import Users from './react/in-app/Users';
import VehicleIcon from './react/in-app/Vehicle';
import View from './react/in-app/View';
import WebIcon from './react/in-app/Web';
//Nav
import HomeIcon from './react/nav/Home';
import HomeFillIcon from './react/nav/HomeFill';
import MessageIcon from './react/nav/Message';
import MessageFillIcon from './react/nav/MessageFill';
import NoteIcon from './react/nav/Note';
import NoteFillIcon from './react/nav/NoteFill';
import ProfileIcon from './react/nav/Profile';
import ProfileFillIcon from './react/nav/ProfileFill';
import Scan from './react/nav/Scan';
import StatsIcon from './react/nav/Stats';
import StatsFillIcon from './react/nav/StatsFill';
import AccountSecondaryIcon from './react/out-of-style-guide/AccountSecondary';
import BadgePipe from './react/out-of-style-guide/BadgePipe';
import BrushIcon from './react/out-of-style-guide/Brush';
import CheckboxChecked from './react/out-of-style-guide/CheckboxChecked';
import CheckboxIndeterminate from './react/out-of-style-guide/CheckboxIndeterminate';
import CheckLargeOutline from './react/out-of-style-guide/CheckLarge';
import CheckRadioSolid from './react/out-of-style-guide/CheckRadio';
import ChevronDownSmallOutline from './react/out-of-style-guide/ChevronDownSmall';
import ChevronRightSmallOutline from './react/out-of-style-guide/ChevronRightSmallOutline';
import ChevronTopSmallOutline from './react/out-of-style-guide/ChevronTopSmall';
import CrossedSmallOutline from './react/out-of-style-guide/CrossedSmall';
import EditProfileIcon from './react/out-of-style-guide/EditProfileIcon';
import QuestionIcon from './react/out-of-style-guide/QuestionIcon';
import SearchOutline from './react/out-of-style-guide/Search';
import SearchIcon from './react/out-of-style-guide/SearchIcon';
import SendCrossIcon from './react/out-of-style-guide/SendCross';
import ShowIcon from './react/out-of-style-guide/ShowIcon';
import CrossedSmallSolid from './react/out-of-style-guide/SvgCrossedSmall';
import XCircleSolid from './react/out-of-style-guide/SvgXCircle';
import TaratFrame from './react/out-of-style-guide/TaratFrame';
import XCircleOutline from './react/out-of-style-guide/XCircle';
//Socials
import AppleIcon from './react/socials/Apple';
import FacebookIcon from './react/socials/Facebook';
import FacebookSmallIcon from './react/socials/FacebookSmall';
import GoogleIcon from './react/socials/Google';
import InstagramIcon from './react/socials/Instagram';
import InstagramSmallIcon from './react/socials/InstagramSmall';
import WhatsappIcon from './react/socials/Whatsapp';
import WhatsappSmallIcon from './react/socials/WhatsappSmallIcon';
import XIcon from './react/socials/X';
import XSmallIcon from './react/socials/XSmall';
import ErrorToastIcon from './react/toast/ErrorToastIcon';
//Toast
import SuccesToastIcon from './react/toast/SuccessToastIcon';
import WarningToastIcon from './react/toast/WarningToastIcon';
//SVG
import AddressDetailsSVG from './svg/AddressDetailsSVG';
import ContactDetailsSvg from './svg/ContactDetailsSVG';
import DefaultProfileCoverPhotoSVG from './svg/DefaultProfileCoverPhotoSVG.tsx';
import DefaultProfilePhotoSVG from './svg/DefaultProfilePhotoSVG';
import EmptySVG from './svg/EmptySVG';
import LogoSVG from './svg/LogoSVG';
import LogoSVGBlack from './svg/LogoSVGBlack';
import LogoTextSVG from './svg/LogoTextSVG';
import PersonalDetailsSVG from './svg/PersonalDetailsSVG';
import QrActiveFoundSVG from './svg/QrActiveFoundSVG';
import QrNewFoundSVG from './svg/QrNewFoundSVG';

const icons = {
    //Out of Style Guide will be organized in the future
    BadgePipe,
    SuccesToastIcon,
    ErrorToastIcon,
    WarningToastIcon,
    EmptySVG,
    BrushIcon,
    DefaultProfileCoverPhotoSVG,
    DefaultProfilePhotoSVG,
    ComingSoon,
    CheckboxChecked,
    CheckboxIndeterminate,
    CheckLargeOutline,
    CheckRadioSolid,
    ChevronDownSmallOutline,
    ChevronRightSmallOutline,
    ChevronTopSmallOutline,
    CrossedSmallOutline,
    CrossedSmallSolid,
    QuestionIcon,
    SearchIcon,
    SearchOutline,
    ShowIcon,
    XCircleOutline,
    XCircleSolid,
    TaratFrame,
    AccountSecondaryIcon,
    SendCrossIcon,
    AdIcon,
    BlockIcon,
    BookmarkIcon,
    BookmarkFillIcon,
    CalendarIcon,
    CameraIcon,
    CheckIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    Secure,
    ChevronUpIcon,
    CloseIcon,
    ConnectIcon,
    CrossCircleIcon,
    DeleteIcon,
    DeliveredIcon,
    EditIcon,
    EmptyIcon,
    FAQIcon,
    FlashIcon,
    NoFlashIcon,
    GalleryIcon,
    HideIcon,
    KeyIcon,
    LocationIcon,
    LockIcon,
    LogoutIcon,
    MailIcon,
    MailFillIcon,
    NotifyIcon,
    OptionIcon,
    PhoneIcon,
    PhoneFillIcon,
    PrivacyIcon,
    QRIcon,
    SendIcon,
    SentIcon,
    SettingsIcon,
    PersonalDetailsSVG,
    SmartphoneIcon,
    SortIcon,
    StoreIcon,
    SupportIcon,
    SwitchCameraIcon,
    TagIcon,
    DeleteQr,
    TechnicalIcon,
    TopicIcon,
    UploadIcon,
    UserIcon,
    Users,
    VehicleIcon,
    WebIcon,
    ThumbsUpFill,
    View,
    ThumbUp,
    Share,
    AddUser,
    RemoveUser,
    Capa_1,
    Layer_1,
    HomeIcon,
    HomeFillIcon,
    MessageIcon,
    MessageFillIcon,
    NoteIcon,
    NoteFillIcon,
    ProfileIcon,
    ProfileFillIcon,
    StatsIcon,
    StatsFillIcon,
    Scan,
    AppleIcon,
    FacebookIcon,
    FacebookSmallIcon,
    GoogleIcon,
    InstagramIcon,
    InstagramSmallIcon,
    XIcon,
    XSmallIcon,
    WhatsappSmallIcon,
    WhatsappIcon,
    AccountCustomIcon,
    AddressDetailsSVG,
    ContactDetailsSvg,
    LogoSVG,
    LogoSVGBlack,
    LogoTextSVG,
    QrActiveFoundSVG,
    QrNewFoundSVG,
    AddCustomIcon,
    BlockUserCustomIcon,
    DeleteAccountCustomIcon,
    DeleteMessageCustomIcon,
    EditCustomIcon,
    KeyCustomIcon,
    MailCustomIcon,
    PhoneCustomIcon,
    SettingsCustomIcon,
    SupportCustomIcon,
    EmptyIndicator,
    SelfLogo,
    ErrorIcon,
    SuccessIcon,
    WarningIcon,
    EditProfileIcon,
    Filter,
    ScanRadius,
};
export type IKeyOfIcons = keyof typeof icons;

export const Icon = ({
    name,
    color = '$grayscale800',
    ...props
}: {name: IKeyOfIcons} & SvgProps & {
        width?: Token | SizeTokens | number;
        height?: Token | SizeTokens | number;
    }) => {
    const {theme} = useThemeSession();
    return React.createElement(icons[name], {
        ...props,
        color: APP_COLORS[
            (theme + 'Colors') as keyof typeof APP_COLORS
        ][color.replace('$', '')] as ColorValue,
    });
};

export type IIconContainerProps = Omit<SvgProps, 'style'> & {
    name?: IKeyOfIcons;
    style?: TextStyle;
};

export type IIconProps = GetProps<typeof Icon> & IIconContainerProps;
