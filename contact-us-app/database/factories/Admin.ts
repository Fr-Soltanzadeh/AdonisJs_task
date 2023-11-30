import Factory from '@ioc:Adonis/Lucid/Factory'

import Admin from 'App/Models/Admin'

export const AdminFactory = Factory
  .define(Admin, ({ faker }) => {
    return {
      username: faker.internet.displayName(),
      password: faker.internet.password(),
    }
  })
  .build()