import { ILoginCredentials } from "./ILoginCredentials";

export interface ILoginFormProps {
  onSubmit: (credentials: ILoginCredentials) => void;
  error: string;
  loading: boolean;
}
