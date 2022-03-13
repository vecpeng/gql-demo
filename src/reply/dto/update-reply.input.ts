import { CreateReplyInput } from './create-reply.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateReplyInput extends PartialType(CreateReplyInput) {
  id: number;
}
