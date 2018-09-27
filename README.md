# Fastify Mongo Memory Plugin

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/nbalduzzi/fastify-mongo-memory.svg?branch=master)](https://travis-ci.org/nbalduzzi/fastify-mongo-memory)

[![NPM](https://nodei.co/npm/fastify-mongo-memory.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/fastify-mongo-memory/)

## Installation

```bash
npm install fastify-mongo-memory --save
```

## Usage

```javascript
fastify.register(require('fastify-mongo-memory'), options, err => console.error(err))

fastify.get('/', (request, reply) => {
  console.log(fastify.mongo) // Mongo in memory DB
})
```

## Options

Mongo in memory DB configuration JSON object.

```json
{
  port: 5000 // 8000 default
  dbname: 'database-test-name'
}
```

## Author

[Nicolás Balduzzi](nico.balduzzi@gmail.com)

## License

Licensed under [MIT](./LICENSE).
