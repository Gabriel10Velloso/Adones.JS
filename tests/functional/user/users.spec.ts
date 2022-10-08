import { test } from '@japa/runner'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('User', () => {
  test('Teste User', async () => {
    const userPayload = { email: 'teste', username: 'teste', password: 'teste' }
    await supertest(BASE_URL).post('/users').send(userPayload).expect(201)
  }).pin() // executa apenas um teste
})

// test.group('User', () => {
//   test('Teste User', async ({ assert }) => {
//     assert.isTrue(true)
//   }).pin() // executa apenas um teste
// })

// https://japa.dev/docs/filtering-tests
// import { test } from '@japa/runner'

// test.group('Maths.add', (group) => {
//   test('add two numbers', () => {
//     console.log('TEST 1 - executed in the test')
//   })
//   .pin() // 👈 pinned test

//   test('add two or more numbers', () => {
//     console.log('TEST 2 - executed in the test')
//   })
// })
