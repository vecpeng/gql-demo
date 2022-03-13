/*
 * @Author: vecpeng
 * @Date: 2022-03-13 13:48:18
 * @LastEditors: vecpeng
 * @LastEditTime: 2022-03-13 13:48:18
 * @FilePath: /gql-demo/generate-typings.ts
 * @Desc:
 *
 * Copyright (c) 2022 by vecpeng, All Rights Reserved.
 */
import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.ts'),
  outputAs: 'class',
});
