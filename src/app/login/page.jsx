"use client";
import { Suspense } from "react";

import { LoginForm } from "./components/LoginForm";

import { useLogin } from "./hooks/useLogin";

import Loader from "@shared/components/Loader/Loader";

export default function LoginPage() {
  const { login, error, loading } = useLogin();

  return (
    <Suspense fallback={<Loader />}>
      <LoginForm onSubmit={login} error={error} loading={loading} />
    </Suspense>
  );
}
