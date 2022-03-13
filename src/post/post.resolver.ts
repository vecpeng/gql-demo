/*
 * @Author: vecpeng
 * @Date: 2022-03-13 22:47:32
 * @LastEditors: vecpeng
 * @LastEditTime: 2022-03-14 00:32:28
 * @FilePath: /gql-demo/src/post/post.resolver.ts
 * @Desc:
 *
 * Copyright (c) 2022 by vecpeng, All Rights Reserved.
 */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.input';
import { UpdatePostDto } from './dto/update-post.input';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation('createPost')
  create(@Args('createPostInput') createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Query('post')
  findAll() {
    return this.postService.findAll();
  }

  @Query('post')
  findOne(@Args('id') id: string) {
    return this.postService.findOne(id);
  }

  @Mutation('updatePost')
  update(@Args('updatePostInput') updatePostDto: UpdatePostDto) {
    return this.postService.update(updatePostDto.id, updatePostDto);
  }

  @Mutation('removePost')
  remove(@Args('id') id: string) {
    return this.postService.remove(id);
  }
}
