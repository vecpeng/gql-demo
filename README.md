<!--
 * @Author: vecpeng
 * @Date: 2022-03-12 22:23:40
 * @LastEditors: vecpeng
 * @LastEditTime: 2022-03-14 14:55:33
 * @FilePath: /gql-demo/README.md
 * @Desc: 
 * 
 * Copyright (c) 2022 by vecpeng, All Rights Reserved. 
-->
## Description
Nestjs+graphql+prisma+moogodb 构建的博客服务端

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
$ docker-compose up -d --build
$ npx prisma db push
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

[MIT licensed](LICENSE).
