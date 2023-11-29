import { test } from '@japa/runner'

test.group('Login', () => {
  test('Login 200', async ({ client }) => {
    const payload = {
      "username": "admin",
      "password": "admin",
    }
    const response = await client.post('/admin/auth/login').json(payload)
  
    response.assertStatus(200)
    response.assertBodyContains({"type": "bearer"})
  
  })
  
  test('Login invalid password', async ({ client }) => {
    const payload = {
      "username": "admin",
      "password": "a",
    }
    const response = await client.post('/admin/auth/login').json(payload)
  
    response.assertStatus(400)
  
  })
  
  test('Login invalid username', async ({ client }) => {
    const payload = {
      "username": "a",
      "password": "a",
    }
    const response = await client.post('/admin/auth/login').json(payload)
  
    response.assertStatus(400)
  
  })
  
})

