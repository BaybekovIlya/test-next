import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, password } = await request.json();

  if (username && password) {
    return NextResponse.json(
      { token: "mock_auth_token", message: "Авторизация успешна" },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { message: "Неверные учетные данные" },
    { status: 401 }
  );
}
