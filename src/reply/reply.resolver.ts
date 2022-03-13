import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReplyService } from './reply.service';
import { CreateReplyInput } from './dto/create-reply.input';
import { UpdateReplyInput } from './dto/update-reply.input';

@Resolver('Reply')
export class ReplyResolver {
  constructor(private readonly replyService: ReplyService) {}

  @Mutation('createReply')
  create(@Args('createReplyInput') createReplyInput: CreateReplyInput) {
    return this.replyService.create(createReplyInput);
  }

  @Query('reply')
  findAll() {
    return this.replyService.findAll();
  }

  @Query('reply')
  findOne(@Args('id') id: number) {
    return this.replyService.findOne(id);
  }

  @Mutation('updateReply')
  update(@Args('updateReplyInput') updateReplyInput: UpdateReplyInput) {
    return this.replyService.update(updateReplyInput.id, updateReplyInput);
  }

  @Mutation('removeReply')
  remove(@Args('id') id: number) {
    return this.replyService.remove(id);
  }
}
