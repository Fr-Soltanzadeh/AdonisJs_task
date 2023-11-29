import { test } from '@japa/runner'

test.group('Create consultation', () => {
  test('Create consultation 201', async ({ client }) => {
    const payload = {
      "phone_number": "09111111111",
      "name": "test_name",
      "category": "skin"
    }
    const response = await client.post('/consultations').json(payload)
  
    response.assertStatus(201)
    response.assertBodyContains({ category: 'skin' })
    response.assertBodyContains({ name: 'test_name' })
    response.assertBodyContains({ phone_number: '09111111111' })
  })
  
  test('Create consultation invalid category', async ({ client }) => {
    const payload = {
      "phone_number": "09111111111",
      "name": "test_name",
      "category": "aaa"
    }
    const response = await client.post('/consultations').json(payload)
  
    response.assertStatus(422)
  })
  
  test('Create consultation invalid phone', async ({ client }) => {
    const payload = {
      "phone_number": "0911111111",
      "name": "test_name",
      "category": "skin"
    }
    const response = await client.post('/consultations').json(payload)
  
    response.assertStatus(422)
  })
})
