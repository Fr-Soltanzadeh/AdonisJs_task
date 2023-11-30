import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Hash from "@ioc:Adonis/Core/Hash";

export default class extends BaseSchema {
  protected tableName = 'admins'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('username', 100).notNullable().index()
      table.string('password', 300).notNullable()
      table.string('remember_me_token').nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
    const defaultAdmin = {
      username: 'admin',
      password: await Hash.make('admin'),
      created_at: new Date(),
      updated_at: new Date(),
    }
    this.defer(async (db) => {
      await db.table(this.tableName).insert(defaultAdmin)
    })    
  }

  public async down () {
    await this.schema.dropTable(this.tableName)
  }
}
