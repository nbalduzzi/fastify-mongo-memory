'use strict'

const fastify = require('fastify')()
const tap = require('tap')
const fastifyMongoMemory = require('./index')

tap.test('fastify.mongo and fastify.mongoInstance should exist', test => {
  test.plan(4)

  fastify.register(fastifyMongoMemory, {
    port: 8000,
    dbname: 'test'
  })

  fastify.ready(err => {
    test.error(err)
    test.ok(fastify.mongo)
    test.ok(fastify.mongoInstance)

    fastify.mongo.close()
    fastify.mongoInstance.stop(error => {
      test.error(error)
      test.end()
    })

    fastify.close()
  })
})
