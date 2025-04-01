import { ILoginCredentials } from "./ILoginCredentials";

export interface ILoginHookReturn {
  login: (credentials: ILoginCredentials) => Promise<void>;
  error: string;
  loading: boolean;
}
