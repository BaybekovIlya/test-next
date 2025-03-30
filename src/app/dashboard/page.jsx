"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import BalanceCard from "./components/BalanceCard";
import DashboardChart from "./components/DashboardChart";
import WithdrawForm from "./components/WithdrawForm";

import { useDashboardData } from "./hooks/useDashboardData";

import Loader from "../../shared/components/Loader/Loader";

export default function DashboardPage() {
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const router = useRouter();
  const { dashboardData, setDashboardData, loading } = useDashboardData();

  useEffect(() => {
    const authToken = Cookies.get("auth_token");
    if (!authToken) {
      router.push("/login?redirect=/dashboard");
    } else {
      setIsAuthLoading(false);
    }
  }, [router]);

  const handleWithdraw = (amount) => {
    const balance = parseFloat(dashboardData.balance);
    const transactionsCount = dashboardData.transactionsCount;

    alert(`Вывод успешный: ${amount} ${dashboardData.currency}`);

    setDashboardData({
      ...dashboardData,
      balance: (balance - amount).toFixed(2),
      transactionsCount: transactionsCount + 1,
      lastTransactionDate: new Date().toLocaleDateString(),
    });
  };

  if (loading || !dashboardData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black">
        <div className="text-xl">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <>
      {!isAuthLoading && (
        <section className="min-h-screen py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex gap-2 justify-between">
              <h1 className="text-3xl font-bold text-gray-800 mb-8">Дашборд</h1>
              <div>
                <button
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
                  onClick={() => router.push('/')}
                >
                  Вернуться к профилю
                </button>
              </div>
            </div>

            <BalanceCard
              balance={dashboardData.balance}
              currency={dashboardData.currency}
              lastTransactionDate={dashboardData.lastTransactionDate}
              transactionsCount={dashboardData.transactionsCount}
            />

            <DashboardChart />

            <WithdrawForm
              balance={dashboardData.balance}
              currency={dashboardData.currency}
              onWithdraw={handleWithdraw}
            />
          </div>
        </section>
      )}
    </>
  );
}
