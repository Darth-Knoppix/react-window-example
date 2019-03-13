import faker from "faker";

export function createTag() {
  return {
    name: faker.random.word(),
    color: faker.internet.color()
  };
}

export function createDummyData(n) {
  let data = [];

  for (let i = 0; i < n; i++) {
    data.push({
      image: faker.image.avatar(),
      title: faker.name.findName(),
      subtitle: faker.name.jobTitle(),
      company: faker.company.companyName(),
      description: faker.lorem.paragraph(),
      tags: [createTag(), createTag(), createTag()]
    });
  }

  return data;
}