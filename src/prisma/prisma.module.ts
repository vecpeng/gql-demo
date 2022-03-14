/*
 * @Author: vecpeng
 * @Date: 2022-03-14 00:50:09
 * @LastEditors: vecpeng
 * @LastEditTime: 2022-03-14 00:54:36
 * @FilePath: /gql-demo/src/prisma/prisma.module.ts
 * @Desc:
 *
 * Copyright (c) 2022 by vecpeng, All Rights Reserved.
 */
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
