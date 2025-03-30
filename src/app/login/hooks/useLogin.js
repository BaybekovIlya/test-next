"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useState } from "react";

export const useLogin = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async ({ username, password }) => {
    setError("");
    setLoading(true);

    try {
      if (username && password) {
        Cookies.set("auth_token", "mock_auth_token", { expires: 1 });
        router.push('/');
      } else {
        throw new Error("Введите логин и пароль");
      }

      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Ошибка авторизации");
      }

      Cookies.set("auth_token", data.token, { expires: 1 });
      router.push(redirect);
    } catch (err) {
      setError(err.message || "Ошибка соединения с сервером");
    } finally {
      setLoading(false);
    }
  };

  return { login, error, loading };
};
