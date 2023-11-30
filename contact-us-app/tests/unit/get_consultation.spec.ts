import { test } from '@japa/runner'

import { AdminFactory } from 'Database/factories/Admin'

test.group('Get consultations', () => {
  test('Get consultations 200', async ({ client }) => {
    // const payload = {
    //   "username": "admin",
    //   "password": "admin"
    // }
    // let token = 'bearer ' + (await client.post('/admin/auth/login').json(payload)).body()["token"]
    // const response = await client.get('/admin/consultations').header("Authorization", token)
    
    const admin = await AdminFactory.create()
    const response = await client.get('/admin/consultations').loginAs(admin)

    response.assertStatus(200)
  })
  
  test('Get consultations unauthorized', async ({ client }) => {
    
    const token = "Bearer MQ.x4sNOUHHCou7b5u-AIxO6PbU3X7cuyXPXsTqAxDxcbYrzsLU5ZpKNdJZAhpx"
    const response = await client.get('/admin/consultations').header("Authorization", token)
  
    response.assertStatus(401)
  })
})
