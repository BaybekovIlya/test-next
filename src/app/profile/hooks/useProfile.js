"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { generateMockProfile } from "../utils/generateMockProfile";

export const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const authToken = Cookies.get("auth_token");
    if (!authToken) {
      router.push("/login?redirect=/");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/profile");
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          setProfile(generateMockProfile());
        }
      } catch (error) {
        console.error("Ошибка загрузки профиля:", error);
        setProfile(generateMockProfile());
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  const handleLogout = () => {
    Cookies.remove("auth_token");
    router.push("/login");
  };

  return { profile, loading, handleLogout };
};
