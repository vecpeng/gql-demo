/*
 * @Author: vecpeng
 * @Date: 2022-03-13 13:10:23
 * @LastEditors: vecpeng
 * @LastEditTime: 2022-03-13 13:10:23
 * @FilePath: /gql-demo/src/app.service.ts
 * @Desc:
 *
 * Copyright (c) 2022 by vecpeng, All Rights Reserved.
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
