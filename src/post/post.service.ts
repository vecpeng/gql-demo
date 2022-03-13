/*
 * @Author: vecpeng
 * @Date: 2022-03-13 22:47:32
 * @LastEditors: vecpeng
 * @LastEditTime: 2022-03-14 00:52:51
 * @FilePath: /gql-demo/src/post/post.service.ts
 * @Desc:
 *
 * Copyright (c) 2022 by vecpeng, All Rights Reserved.
 */
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.input';
import { UpdatePostDto } from './dto/update-post.input';
import { PrismaService } from '../prisma/prisma.service';
import { Post, Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data: {
        ...createPostDto,
        deleted: false,
      },
    });
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(id: string) {
    return this.prisma.post.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: {
        id,
      },
      data: updatePostDto,
    });
  }

  remove(id: string) {
    return this.prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
