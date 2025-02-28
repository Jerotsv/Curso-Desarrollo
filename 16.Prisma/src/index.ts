import { $Enums, PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const getCountries = async () => {
    const countries = await prisma.country.findMany();
    console.log(countries);
};

export const getCountriesByContinents = async (
    continent: $Enums.CountryContinent,
) => {
    const selectOptions: Prisma.CountrySelect = {
        code: true,
        name: true,
        capital: true,
    };

    const countries = await prisma.country.findMany({
        where: {
            continent: continent,
        },
        select: selectOptions,
    });
    console.log(countries);
};

// await getCountries();
// await getCountriesByContinents('Europe');

//getCitiesByCountryCode('ESP')

export const getCitiesByCountryCode = async (countryCode: string) => {
    const cities = await prisma.city.findMany({
        where: {
            countryCode,
        },
    });
    console.log(cities);
};
