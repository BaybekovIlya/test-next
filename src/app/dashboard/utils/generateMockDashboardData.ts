import { faker } from "@faker-js/faker";

import { IDashboardData } from "../types/IDashboardData";

export const generateMockDashboardData = (): IDashboardData => ({
  balance: faker.finance.amount({ 
    min: 1000, 
    max: 10000, 
    dec: 2 
  }),
  transactionsCount: faker.number.int({ min: 5, max: 50 }),
  lastTransactionDate: faker.date.recent().toLocaleDateString(),
  currency: "USD",
});