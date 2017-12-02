'use strict'

const fastifyPlugin = require('fastify-plugin')
const MongoInMemory = require('mongo-in-memory')
const mongodb = require('mongodb')

const fastifyMongoMemory = (fastify, { port, dbname }, next) => {
  const server = new MongoInMemory(port || 8000)

  server.start(error => {
    if (error) {
      next(new Error(error))
    } else {
      const uri = server.getMongouri(dbname || 'test')

      mongodb.connect(uri, (error, db) => {
        if (error) {
          next(new Error(error))
        } else {
          fastify.decorate('mongo', db)
          next()
        }
      })
    }
  })

  fastify.addHook('onClose', (instance, done) => {
    server.stop(error => {
      if (error) {
        done(new Error(error))
      } else {
        fastify.mongo.close()
        done()
      }
    })
  })
}

module.exports = fastifyPlugin(fastifyMongoMemory, '>=0.30.0')
