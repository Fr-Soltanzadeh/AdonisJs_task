import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ConsultationFactory } from 'Database/factories/Consultation';

export default class extends BaseSeeder {
    public async run () {
        await ConsultationFactory.createMany(10);
    }
  }
  