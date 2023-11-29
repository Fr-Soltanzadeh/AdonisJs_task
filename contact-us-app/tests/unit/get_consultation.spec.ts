import { test } from '@japa/runner'
test.group('Get consultations', () => {
  test('Get consultations 200', async ({ client }) => {
  
    const token = "Bearer MQ._mJns2WMhSxISYNwrY6RZ1GLckkHgXguDbQlutkP-pNV0Gp8-9Y-qGy01Mdm"
    const response = await client.get('/admin/consultations').header("Authorization", token)
  
    response.assertStatus(200)
  })
  
  test('Get consultations unauthorized', async ({ client }) => {
    
    const token = "Bearer MQ.x4sNOUHHCou7b5u-AIxO6PbU3X7cuyXPXsTqAxDxcbYrzsLU5ZpKNdJZAhpx"
    const response = await client.get('/admin/consultations').header("Authorization", token)
  
    response.assertStatus(401)
  })
})
