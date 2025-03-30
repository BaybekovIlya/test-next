"use client";
import { useState, useEffect } from "react";
import { generateMockDashboardData } from "../utils/generateMockDashboardData";

export const useDashboardData = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

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
