"use client";
import { useState, useEffect } from "react";

import { generateMockDashboardData } from "../utils/generateMockDashboardData";

import { IDashboardData } from "../types/IDashboardData";

export const useDashboardData = () => {
  const [dashboardData, setDashboardData] = useState<IDashboardData | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/dashboard");
        if (response.ok) {
          const apiData = await response.json();
          setDashboardData(apiData);
        } else {
          setDashboardData(generateMockDashboardData());
        }
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { dashboardData, setDashboardData, loading };
};
