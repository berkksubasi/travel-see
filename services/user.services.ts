
//Interfaces
import axiosInstance from "@configuration/axios.instance";
import { IAddressInformations, IPersonalInformations, IUser } from "@interfaces";
//Config


const getUserDetailsWithToken = async (): Promise<IUser> => {
  const response = await axiosInstance('/user', {
    method: 'GET',
  });

  return response.data;
}


const updateContactInformations = async (personalInfos: IPersonalInformations) => {
  const response = await axiosInstance('/user/update/personalInformations', {
    method: 'PATCH',
    data: personalInfos
  });

  return response.data;
}


const updateAddressInformations = async (addressDetails: IAddressInformations) => {
  const response = await axiosInstance('/user/update/addressInformations', {
    method: 'PATCH',
    data: addressDetails
  });
  return response.data;
}


const userServices = {
  getUserDetailsWithToken,
  updateContactInformations,
  updateAddressInformations,
}

export default userServices;
