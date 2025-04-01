import { IProfile } from "./IProfile";

export interface IProfileProps {
  profile: IProfile | null;
  loading: boolean;
  handleLogout: () => void;
}
