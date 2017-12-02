'use strict'

const fastify = require('fastify')()
const tap = require('tap')
const fastifyMongoMemory = require('./index')

tap.test('fastify.mongo should exist', test => {
  test.plan(2)

  fastify.register(fastifyMongoMemory, {
    port: 8000,
    dbname: 'test'
  })

  fastify.ready(err => {
    test.error(err)
    test.ok(fastify.mongo)

    fastify.close(() => test.end())
  })
})
