/*
 * @Author: vecpeng
 * @Date: 2022-03-13 13:04:24
 * @LastEditors: vecpeng
 * @LastEditTime: 2022-03-13 13:04:24
 * @FilePath: /gql-demo/src/app.resolver.ts
 * @Desc: 
 * 
 * Copyright (c) 2022 by vecpeng, All Rights Reserved. 
 */
import { resolver, Query } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  getHello() {
    return 'Hello World!';
  }
}