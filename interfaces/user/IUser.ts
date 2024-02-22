import mongoose from "mongoose";
import IContactInformations from "./IContactInformations";
import IPersonalInformations from "./IPersonalInformations";
import IAddressInformations from "./IAddressInformations";

interface IUser {
  _id: mongoose.Types.ObjectId;
  username: string;
  email: string;
  phone?: string | undefined | null;
  password: string;
  createdAt: NativeDate;
  updatedAt: NativeDate;
  contactInformations?: IContactInformations;
  personalInformations?: IPersonalInformations;
  addressInformations?: IAddressInformations;
  __v?: number;
}

export default IUser;
