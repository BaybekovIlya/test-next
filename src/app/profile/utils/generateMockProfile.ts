import { faker } from "@faker-js/faker/locale/ru";

import { IProfile } from "../types/IProfile";

export const generateMockProfile = (): IProfile => ({
  fullName: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  address: faker.location.streetAddress(),
});
