/*
 * @Author: vecpeng
 * @Date: 2022-03-13 22:47:32
 * @LastEditors: vecpeng
 * @LastEditTime: 2022-03-14 00:53:31
 * @FilePath: /gql-demo/src/post/post.module.ts
 * @Desc:
 *
 * Copyright (c) 2022 by vecpeng, All Rights Reserved.
 */
import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [PostResolver, PostService],
  imports: [PrismaModule],
})
export class PostModule {}
