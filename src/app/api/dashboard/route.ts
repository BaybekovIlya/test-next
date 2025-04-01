import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

import { IDashboardData } from "@/app/dashboard/types/IDashboardData";

export const dynamic = "force-static";

export async function GET(): Promise<NextResponse<IDashboardData>> {
  const dashboardData = {
    balance: faker.finance.amount({
      min: 1000,
      max: 10000,
      dec: 2,
    }),
    transactionsCount: faker.number.int({ min: 5, max: 50 }),
    lastTransactionDate: faker.date.recent().toLocaleDateString(),
    currency: "USD",
  };

  return NextResponse.json(dashboardData);
}
