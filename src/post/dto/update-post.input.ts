/*
 * @Author: vecpeng
 * @Date: 2022-03-13 22:47:32
 * @LastEditors: vecpeng
 * @LastEditTime: 2022-03-14 13:34:17
 * @FilePath: /gql-demo/src/post/dto/update-post.input.ts
 * @Desc:
 *
 * Copyright (c) 2022 by vecpeng, All Rights Reserved.
 */
import { CreatePostDto } from './create-post.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  id: string;
}
