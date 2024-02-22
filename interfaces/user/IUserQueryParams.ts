import { ILoginCredentials } from "../auth";

interface IUserQueryParams {
  _id?: string;
  identifier?: ILoginCredentials['identifier'];
}

export default IUserQueryParams
