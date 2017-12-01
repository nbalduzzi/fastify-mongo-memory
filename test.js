'use strict'

const fastify = require('fastify')()
const tap = require('tap')
const fastifyMongoMemory = require('./index')

tap.test('fastify.mongoMemory should exist', test => {
  test.plan(3)

  fastify.register(fastifyMongoMemory, {
    port: 8000,
    dbname: 'test'
  })

  fastify.ready(err => {
    test.error(err)
    test.ok(fastify.mongoMemory)

    fastify.mongoMemory.db.close()
    fastify.mongoMemory.instance.stop(error => {
      test.error(error)
      test.end()
    })

    fastify.close()
  })
})
