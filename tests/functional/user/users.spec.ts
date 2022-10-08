import { test } from '@japa/runner'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

/*
  Retorno do usuário
  {
    "users":{
       id: number,
       username: string,
       email: string,
       password: ' string,
       avatar: ' string,
      }
  }
*/
test.group('User', () => {
  test('Teste User', async ({ assert }) => {
    const userPayload = {
      email: 'test@test.com',
      username: 'test',
      password: 'test',
      avatar: 'https://images.com/image/1',
    }
    const { body } = await supertest(BASE_URL).post('/users').send(userPayload).expect(201)
    assert.exists(body.user, 'User undefined')
    assert.exists(body.user.id, 'Id undefined')
    assert.equal(body.user.email, userPayload.email)
    assert.equal(body.user.username, userPayload.username)
    assert.equal(body.user.avatar, userPayload.avatar)
    assert.equal(body.user.password, userPayload.password)
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
