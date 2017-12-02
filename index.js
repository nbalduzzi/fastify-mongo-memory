'use strict'

const fastifyPlugin = require('fastify-plugin')
const MongoInMemory = require('mongo-in-memory')
const mongodb = require('mongodb')

function fastifyMongoMemory (fastify, opts, next) {
  const server = new MongoInMemory(opts.port || 8000)

  server.start(function (error) {
    if (error) {
      next(new Error(error))
    } else {
      const uri = server.getMongouri(opts.dbname || 'test')

      mongodb.connect(uri, function (error, db) {
        if (error) {
          next(new Error(error))
        } else {
          fastify.decorate('mongo', db)
          next()
        }
      })
    }
  })

  fastify.addHook('onClose', function (instance, done) {
    server.stop(function (error) {
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
