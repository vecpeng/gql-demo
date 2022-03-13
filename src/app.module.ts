import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DateScalar } from './scalar';
import { join } from 'path';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { ReplyModule } from './reply/reply.module';

@Module({
  providers: [DateScalar],
  imports: [
    PostModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    CommentModule,
    ReplyModule,
  ],
})
export class AppModule {}
