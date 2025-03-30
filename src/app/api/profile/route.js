import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker/locale/ru';

export const dynamic = 'force-static';

export async function GET() {
  const profileData = {
    fullName: faker.person.fullName(),
    phone: faker.phone.number('+7 (###) ###-##-##'),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
  };

  return NextResponse.json(profileData);
}