'use strict'

const fastifyPlugin = require('fastify-plugin')
const MongoInMemory = require('mongo-in-memory')
const mongodb = require('mongodb')

const fastifyMongoMemory = (fastify, { port, dbname }, next) => {
  try {
    const instance = new MongoInMemory(port)

    instance.start(error => {
      if (error) {
        next(new Error(error))
      } else {
        const uri = instance.getMongouri(dbname)

        mongodb.connect(uri, (error, db) => {
          if (!error) {
            fastify.decorate('mongoMemory', { db, instance })
            next()
          } else {
            next(new Error(error))
          }
        })
      }
    })
  } catch (err) {
    next(new Error(err))
  }
}

module.exports = fastifyPlugin(fastifyMongoMemory, '>=0.30.0')
