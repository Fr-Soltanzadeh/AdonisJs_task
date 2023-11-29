import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import {CategoryEnum} from 'Contracts/enums'


export default class extends BaseSchema {
  protected tableName = 'consultations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('phone_number', 14).notNullable
      table.string('name', 100).notNullable
      table.enum('category', Object.values(CategoryEnum)).index()
      .notNullable()
      table.string('image', 200).nullable
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
