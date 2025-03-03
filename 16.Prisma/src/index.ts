import { $Enums, PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient().$extends({
    result: {
        country: {
            density: {
                needs: { population: true, surfaceArea: true },
                compute(country) {
                    return country.population / country.surfaceArea.toNumber();
                },
            },
        },
    },
});

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

// export const getCitiesByCountryCode = async (countryCode: string) => {
//     const cities = await prisma.city.findMany({
//         where: {
//             countryCode,
//         },
//     });
//     console.log(cities);
// };

export const getAllCountries = async () => {
    const countries = await prisma.country.findMany({
        select: {
            name: true,
            population: true,
            surfaceArea: true,
        },
    });

    // - Añadir un elemento calculado: la densidad
    const countriesWithDensity = countries.map((country) => ({
        name: country.name,
        population: country.population,
        extension: country.surfaceArea,
        density: country.population / country.surfaceArea.toNumber(),
    }));

    console.log(countriesWithDensity);
};

// - Nombre de la ciudad, país y su forma de gobierno de las ciudades de más de 1.000.000 de habitantes de Asia y África
export const getCitiesInAsiaAndAfrica = async () => {
    const cities = await prisma.city.findMany({
        where: {
            population: { gt: 1000000 }, // Ciudades con más de 1M habitantes
            country: {
                continent: { in: ['Asia', 'Africa'] }, // En Asia o África
            },
        },
        select: {
            name: true,
            country: {
                select: {
                    name: true,
                    governmentForm: true,
                    countryLanguage: {
                        select: {
                            language: true, // Seleccionamos el idioma
                            isOfficial: true, // Si es oficial
                        },
                    },
                },
            },
        },
    });

    console.log(cities);
};

await getCitiesInAsiaAndAfrica();

// - Cual es la superficie total del mundo
export const totalWorldSurface = async () => {
    const result = await prisma.country.aggregate({
        _sum: { surfaceArea: true },
    });

    console.log(result);
};
await totalWorldSurface();
