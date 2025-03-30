import { faker } from "@faker-js/faker/locale/ru";

export const generateMockProfile = () => ({
  fullName: faker.person.fullName(),
  phone: faker.phone.number("+7 (###) ###-##-##"),
  email: faker.internet.email(),
  address: faker.location.streetAddress(),
});
