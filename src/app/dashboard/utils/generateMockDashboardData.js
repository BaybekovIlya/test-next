import { faker } from "@faker-js/faker";

export const generateMockDashboardData = () => ({
  balance: faker.finance.amount(1000, 10000, 2),
  transactionsCount: faker.number.int({ min: 5, max: 50 }),
  lastTransactionDate: faker.date.recent().toLocaleDateString(),
  currency: "USD",
});