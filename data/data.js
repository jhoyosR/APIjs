const { faker } = require('@faker-js/faker');

const crearProductos = () => {
    return {
        id: faker.string.uuid(),
        nombre: faker.commerce.productName(),
        descripcion: faker.commerce.productDescription(),
        precio: faker.commerce.price(),
        categoria: faker.commerce.department(),
    };
};

const crearVehiculos = () => {
    return {
        id: faker.string.uuid(),
        nombre: faker.vehicle.vehicle(),
        modelo: faker.vehicle.model(),
        color: faker.vehicle.color(),
        tipo: faker.vehicle.type(),
    }
}

const crearPersonas = () => {
    return {
        nombreCompleto: faker.person.fullName(),
        genero: faker.person.sex(),
        areaTrabajo: faker.person.jobArea(),
        tituloTrabajo: faker.person.jobTitle(),
        descripcionTrabajo: faker.person.jobDescriptor(),
        signoZodiacal: faker.person.zodiacSign(),
    }
}

const productos = faker.helpers.multiple(crearProductos, {
    count: 5,
});

const vehiculos = faker.helpers.multiple(crearVehiculos, {
    count: 5,
});

const personas = faker.helpers.multiple(crearPersonas, {
    count: 5,
});

module.exports = {
    productos,
    vehiculos,
    personas,
}