import { NextResponse } from "next/server";

import { ILoginCredentials } from "@/app/login/types/ILoginCredentials";
import {
  ILoginErrorResponse,
  ILoginResponse,
  ILoginSuccessResponse,
} from "@/app/login/types/ILoginResponse";

export async function POST(
  request: Request
): Promise<NextResponse<ILoginResponse>> {
  const { username, password }: ILoginCredentials = await request.json();

  if (username && password) {
    return NextResponse.json<ILoginSuccessResponse>(
      { token: "mock_auth_token", message: "Авторизация успешна" },
      { status: 200 }
    );
  }

  return NextResponse.json<ILoginErrorResponse>(
    { message: "Неверные учетные данные" },
    { status: 401 }
  );
}
