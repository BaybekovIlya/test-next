"use client";
import { faker } from "@faker-js/faker";
import { useRouter } from "next/navigation";
import AboutBackgrountImage from "./components/AboutBackgrountImage";

export default function AboutPage() {
  const router = useRouter();
  const aboutText = faker.lorem.paragraphs(4);

  return (
    <div className="relative min-h-screen">
      <AboutBackgrountImage />

      <section className="relative z-10 min-h-screen flex items-center justify-center opacity-85 py-12">
        <div className="px-4">
          <div className="flex flex-col gap-8 bg-white p-8 rounded-lg shadow-xl max-w-2xl">
            <h1 className="text-3xl font-bold text-gray-800">
              О нашем сервисе
            </h1>
            <div className="prose prose-lg text-gray-700">
              {aboutText.split("\n").map((paragraph, i) => (
                <p key={i} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              <p>Дата основания: {faker.date.past().toLocaleDateString()}</p>
              <p>
                Количество пользователей:{" "}
                {faker.number.int({ min: 10000, max: 100000 })}
              </p>
            </div>
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
              onClick={() => {
                router.push('/');
              }}
            >
              Назад к профилю
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
