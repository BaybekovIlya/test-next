"use client";
import { useRouter } from "next/navigation";

import { IProfileProps } from "../types/IProfileProps";

import Loader from "@/shared/components/Loader/Loader";

export const ProfileInfo = ({ profile, loading, handleLogout }: IProfileProps) => {
  const router = useRouter();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-black">
          <Loader />
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-500">Ошибка загрузки профиля</div>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-12">
      <div className="px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6">
          <div className="mb-8 flex justify-between items-start">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-gray-800">
                {profile.fullName}
              </h1>
              <p className="text-gray-600">+7{profile.phone}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer"
            >
              Выйти
            </button>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Информация о профиле
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium text-gray-600">Email</h3>
                <p className="text-gray-800">{profile.email}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-600">Адрес</h3>
                <p className="text-gray-800">{profile.address}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => router.push("/dashboard")}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
            >
              Перейти в дашборд
            </button>
            <button
              onClick={() => router.push("/about")}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
            >
              О сервисе
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
