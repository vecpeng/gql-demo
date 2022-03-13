/*
 * @Author: vecpeng
 * @Date: 2022-03-13 13:04:24
 * @LastEditors: vecpeng
 * @LastEditTime: 2022-03-13 16:07:20
 * @FilePath: /gql-demo/src/app.resolver.ts
 * @Desc:
 *
 * Copyright (c) 2022 by vecpeng, All Rights Reserved.
 */
import { Resolver, Query } from '@nestjs/graphql';
import { AppService } from './app.service';
@Resolver()
export class AppResolver {
  constructor(private appService: AppService) {}
  @Query(() => String)
  hello() {
    return this.appService.getHello();
  }
}
