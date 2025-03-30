import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

export const dynamic = "force-static";

export async function GET() {
  const dashboardData = {
    balance: faker.finance.amount(1000, 10000, 2),
    transactionsCount: faker.number.int({ min: 5, max: 50 }),
    lastTransactionDate: faker.date.recent().toLocaleDateString(),
    currency: "USD",
  };

  return NextResponse.json(dashboardData);
}
