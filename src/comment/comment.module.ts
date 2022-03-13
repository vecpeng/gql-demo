/*
 * @Author: vecpeng
 * @Date: 2022-03-13 18:16:11
 * @LastEditors: vecpeng
 * @LastEditTime: 2022-03-13 18:17:04
 * @FilePath: /gql-demo/src/comment/comment.module.ts
 * @Desc:
 *
 * Copyright (c) 2022 by vecpeng, All Rights Reserved.
 */
import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';

@Module({
  providers: [CommentResolver, CommentService],
})
export class CommentModule {}
