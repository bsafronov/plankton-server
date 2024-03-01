import { Department, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const usersAmount = 100;
const departments = Array.from({ length: 20 }).map((_, i) => ({
  name: `Department ${i + 1}`,
}));
const products = Array.from({ length: 20 }).map((_, i) => ({
  name: `Product ${i + 1}`,
}));

const generateUsers = async (departments: Department[]) => {
  for (let i = 0; i < usersAmount; i++) {
    const randomDepartment =
      departments[Math.floor(Math.random() * departments.length)];

    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        password: faker.internet.password(),
        department: {
          connect: {
            id: randomDepartment.id,
          },
        },
      },
    });
  }
};

const generateDepartments = async () => {
  await prisma.department.createMany({
    data: departments.map((item) => ({
      name: item.name,
    })),
  });
};

const generateProducts = async () => {
  await prisma.product.createMany({
    data: products.map((item) => ({
      name: item.name,
    })),
  });
};

const getDepartments = async () => {
  return await prisma.department.findMany();
};

const main = async () => {
  await generateDepartments();
  const departments = await getDepartments();
  await generateUsers(departments);
  await generateProducts();
};

main()
  .then(async () => {
    console.log('Seeding complete!');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
