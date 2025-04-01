export interface ILoginSuccessResponse {
  token: string;
  message: string;
}

export interface ILoginErrorResponse {
  message: string;
}

export type ILoginResponse = ILoginSuccessResponse | ILoginErrorResponse;
