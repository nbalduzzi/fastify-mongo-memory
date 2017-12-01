# Fastify Mongo Memory Plugin

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/chapuletta/fastify-mongo-memory.svg?branch=master)](https://travis-ci.org/chapuletta/fastify-mongo-memory)

## Installation

```
npm install fastify-mongo-memory --save
```

## Usage

```
fastify.register(require('fastify-mongo-memory'), options, err => console.error(err))

fastify.get('/', (request, reply) => {
  console.log(fastify.mongoMemory) // Mongo in memory DB instance
})
```

## Options

Mongo in memory DB configuration JSON object.

```
{
  port: 5000 // 8000 default
  dbname: 'database-test-name'
}
```

## Version

v1.0.0

## Author

[Nicolás Balduzzi](nico.balduzzi@gmail.com)

## License

Licensed under [MIT](./LICENSE).
