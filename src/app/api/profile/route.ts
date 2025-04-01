import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker/locale/ru";

import { IProfile } from "@/app/profile/types/IProfile";

export const dynamic = "force-static";

export async function GET(): Promise<NextResponse<IProfile>> {
  const profileData = {
    fullName: faker.person.fullName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
  };

  return NextResponse.json(profileData);
}
