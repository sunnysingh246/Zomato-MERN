const test = require('node:test')
const assert = require('node:assert/strict')
const authController = require('../src/controllers/auth.controller.js')

test('logoutFoodPartner returns success status', () => {
  let statusCode = 0
  let payload = null
  let clearedCookie = null

  const res = {
    clearCookie(name) {
      clearedCookie = name
    },
    status(code) {
      statusCode = code
      return this
    },
    json(data) {
      payload = data
      return this
    }
  }

  authController.logoutFoodPartner({}, res)

  assert.equal(clearedCookie, 'token')
  assert.equal(statusCode, 200)
  assert.deepEqual(payload, { message: 'Food partner loggedOut successfully' })
})
