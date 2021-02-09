# Fastify Mongo Memory Plugin

![Test](https://github.com/nbalduzzi/fastify-mongo-memory/workflows/Test/badge.svg)
![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Semantic Release](https://github.com/nbalduzzi/fastify-mongo-memory/workflows/Semantic%20Release/badge.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![NPM](https://nodei.co/npm/fastify-mongo-memory.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/fastify-mongo-memory/)

## Installation

```bash
npm install fastify-mongo-memory --save
```

## Usage

```javascript
fastify.register(require('fastify-mongo-memory'), options, err => console.error(err));

fastify.get('/', (request, reply) => {
    console.log(fastify.mongo); // Mongo in memory DB
});
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
