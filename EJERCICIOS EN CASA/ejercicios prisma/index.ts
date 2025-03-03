// // ## Ejercicio 1

// // - Listar todos los países con su población y su extensión, incluyendo los correspondientes alias adecuados en español
// export const getAllCountries = async () => {
//     const countries = await prisma.country.findMany({
//         select: {
//             name: true,
//             population: true,
//             surfaceArea: true,
//         },
//     });

//     // - Añadir un elemento calculado: la densidad
//     const countriesWithDensity = countries.map((country) => ({
//         name: country.name,
//         population: country.population,
//         extension: country.surfaceArea,
//         density: country.population / country.extension.toNumber(),
//     }));

//     console.log(countriesWithDensity);
// };

// // - Listar los 10 primeros países
// export const getFirst10Countries = async () => {
//     const countries = await prisma.country.findMany({
//         select: {
//             name: true,
//             population: true,
//         },
//         take: 10,
//     });

//     console.log(countries);
// };

// // - Listar los países entre el 10 y el 20
// export const getCountries10to20 = async () => {
//     const countries = await prisma.country.findMany({
//         select: { name: true, population: true },
//         skip: 10,
//         take: 10,
//     });

//     console.log(countries);
// };

// // - Ordenar la salida según población (sin verla)
// export const getCountriesSortedByPopulation = async () => {
//     const countries = await prisma.country.findMany({
//         select: { name: true },
//         orderBy: { population: 'desc' },
//     });

//     console.log(countries);
// };

// // - Ver la población y comprobar el orden

// // ## Ejercicio 2

// // - Listar los países de Asia o África de cuatro letras ordenados por población
// export const getCountriesByContinentAndNameLength = async () => {
//     const countries = await prisma.country.findMany({
//         where: {
//             continent: { in: ['Asia', 'Africa'] },
//             name: { length: 4 },
//         },
//         orderBy: { population: 'desc' },
//     });

//     console.log(countries);
// };

// // - Lista del 10 al 20 de los países mayores de 1.000.000 orden por población y mostrándola
// export const getBigCountries10to20 = async () => {
//     const countries = await prisma.country.findMany({
//         where: { population: { gt: 1000000 } }, // gt = greater than y es una propiedad de prisma
//         orderBy: { population: 'desc' },
//         skip: 10,
//         take: 10,
//     });

//     console.log(countries);
// };

// // - Listar los países con densidad mayor que 500
// export const getDenseCountries = async () => {
//     const countries = await prisma.country.findMany();

//     const denseCountries = countries
//         .map((c) => ({
//             name: c.name,
//             density: c.population / c.surfaceArea,
//         }))
//         .filter((c) => c.density > 500);

//     console.log(denseCountries);
// };

// // - Listar los 10 países de mayor extensión, ordenados por su población, mostrándola
// const getLargestCountriesByAreaSortedByPopulation = async () => {
//     const countries = await prisma.country.findMany({
//         orderBy: [
//             { surfaceArea: 'desc' }, // Ordenamos por superficie en orden descendente (de mayor a menor)
//             { population: 'desc' }, // En caso de empate, ordenamos por población en orden descendente
//         ],
//         take: 10, // Tomamos solo los primeros 10 países
//         select: {
//             name: true, // Seleccionamos el nombre del país
//             surfaceArea: true, // Seleccionamos la superficie del país
//             population: true, // Seleccionamos la población del país
//         },
//     });

//     console.log(countries); // Mostramos los países en la consola
// };

// getLargestCountriesByAreaSortedByPopulation();

// // ## Ejercicio 3

// // Probamos algunas selecciones en las que se utilice la unión de dos tablas (select left join)

// // - Nombre de la ciudad, país y su forma de gobierno de las ciudades de más de 1.000.000 de habitantes de Asia y África
// export const getLargeCitiesInAsiaAndAfrica = async () => {
//     const cities = await prisma.city.findMany({
//         where: {
//             population: { gt: 1000000 }, // Ciudades con más de 1M habitantes
//             country: {
//                 continent: { in: ['Asia', 'Africa'] }, // En Asia o África
//             },
//         },
//         select: {
//             name: true,
//             country: {
//                 select: {
//                     name: true,
//                     governmentForm: true,
//                 },
//             },
//         },
//     });

//     console.log(cities);
// };

// // - Países y sus capitales en América

// export const getAmericanCountriesAndCapitals = async () => {
//     const countries = await prisma.country.findMany({
//         where: { continent: 'America' },
//         select: {
//             name: true,
//             capital: {
//                 select: { name: true },
//             },
//         },
//     });

//     console.log(countries);
// };

// // ## Ejercicio 4

// // - Seleccionamos ciudades Europeas de más de 1.500.000 de habitantes indicado el país al que pertenecen y sus lenguajes oficiales
// const getCitiesInEuropeWithPopulationOver1M = async () => {
//     const cities = await prisma.city.findMany({
//         where: {
//             population: {
//                 gt: 1500000, // Buscamos ciudades con más de 1.500.000 habitantes
//             },
//             country: {
//                 continent: 'Europe', // Filtramos por continente europeo
//             },
//         },
//         include: {
//             country: {
//                 select: {
//                     name: true, // Seleccionamos el nombre del país
//                     countryLanguage: {
//                         where: {
//                             isOfficial: 'T', // Solo seleccionamos los lenguajes oficiales
//                         },
//                         select: {
//                             language: true, // Seleccionamos el idioma
//                         },
//                     },
//                 },
//             },
//         },
//     });

//     console.log('Ciudades Europeas con más de 1.500.000 habitantes:');
//     cities.forEach((city) => {
//         const languages = city.country.countryLanguage
//             .map((lang) => lang.language)
//             .join(', ');
//         console.log(
//             `Ciudad: ${city.name}, País: ${city.country.name}, Idiomas oficiales: ${languages}`
//         );
//     });
// };

// getCitiesInEuropeWithPopulationOver1M();

// // ## Ejercicio 5

// // Funciones de agregación

// // - Cuantos países hay en el mundo según nuestra tabla
// export const countCountries = async () => {
//     const count = await prisma.country.count();
//     console.log(count);
// };

// // - Cual es la superficie total del mundo
// export const totalWorldSurface = async () => {
//     const result = await prisma.country.aggregate({
//         _sum: { surfaceArea: true },
//     });

//     console.log(result._sum.surfaceArea);
// };

// // - Cual es la superficie media de los países del mundo
// export const averageCountrySurface = async () => {
//     // Hecho `por chatgpt
//     const result = await prisma.country.aggregate({
//         _avg: { surfaceArea: true },
//     });

//     console.log(result._avg.surfaceArea);
// };

// // - Cual es el país más grande del mundo
// export const largestCountry = async () => {
//     const country = await prisma.country.findFirst({
//         orderBy: { surfaceArea: 'desc' },
//     });

//     console.log(country);
// };

// // - Cual es el país más pequeño del mundo
// export const smallestCountry = async () => {
//     const country = await prisma.country.findFirst({
//         orderBy: { surfaceArea: 'asc' },
//     });

//     console.log(country);
// };

// // - Cual es la superficie y la población de cada continente

// const getSurfaceAndPopulationByContinent = async () => {
//     //Hecho por chatgpt
//     // Consultamos la superficie total y la población total por continente
//     const continentsData = await prisma.country.groupBy({
//         by: ['continent'], // Agrupamos por continente
//         _sum: {
//             surfaceArea: true, // Sumamos la superficie de los países
//             population: true, // Sumamos la población de los países
//         },
//     });

//     // Mostrar la superficie y la población de cada continente
//     console.log('Superficie y población por continente:');
//     continentsData.forEach((continent) => {
//         console.log(`Continente: ${continent.continent}`);
//         console.log(`Superficie total: ${continent._sum.surfaceArea} km²`);
//         console.log(`Población total: ${continent._sum.population}`);
//         console.log('------------------------------------');
//     });
// };

// getSurfaceAndPopulationByContinent();
