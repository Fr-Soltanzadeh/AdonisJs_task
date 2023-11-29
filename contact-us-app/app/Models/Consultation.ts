import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Consultation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public phone_number: String

  @column()
  public name: String

  @column()
  public image: String

  @column()
  public category: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
