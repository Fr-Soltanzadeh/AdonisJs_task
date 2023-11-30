import Factory from '@ioc:Adonis/Lucid/Factory'

import Consultation from 'App/Models/Consultation'
import {CategoryEnum} from 'Contracts/enums'

export const ConsultationFactory = Factory
  .define(Consultation, ({ faker }) => {
    const categories = Object.values(CategoryEnum);
    return {
      name: faker.internet.displayName(),
      category: categories[Math.floor(Math.random() * categories.length)],
      phone_number: faker.helpers.fromRegExp(/09[0-9]{9}/),
    }
  })
  .build()