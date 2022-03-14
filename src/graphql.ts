/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCommentInput {
    exampleField?: Nullable<number>;
}

export class UpdateCommentInput {
    id: string;
}

export class CreatePostInput {
    title: string;
    content: string;
}

export class UpdatePostInput {
    id: string;
    title: string;
    content: string;
}

export class CreateReplyInput {
    exampleField?: Nullable<number>;
}

export class UpdateReplyInput {
    id: string;
}

export class Comment {
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    abstract comments(): Nullable<Comment>[] | Promise<Nullable<Comment>[]>;

    abstract comment(id: string): Nullable<Comment> | Promise<Nullable<Comment>>;

    abstract posts(): Nullable<Nullable<Post>[]> | Promise<Nullable<Nullable<Post>[]>>;

    abstract post(id: string): Nullable<Post> | Promise<Nullable<Post>>;

    abstract replies(): Nullable<Reply>[] | Promise<Nullable<Reply>[]>;

    abstract reply(id: string): Nullable<Reply> | Promise<Nullable<Reply>>;
}

export abstract class IMutation {
    abstract createComment(createCommentInput: CreateCommentInput): Comment | Promise<Comment>;

    abstract updateComment(updateCommentInput: UpdateCommentInput): Comment | Promise<Comment>;

    abstract removeComment(id: string): Nullable<Comment> | Promise<Nullable<Comment>>;

    abstract createPost(createPostInput: CreatePostInput): Post | Promise<Post>;

    abstract updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>;

    abstract removePost(id: string): Nullable<Post> | Promise<Nullable<Post>>;

    abstract createReply(createReplyInput: CreateReplyInput): Reply | Promise<Reply>;

    abstract updateReply(updateReplyInput: UpdateReplyInput): Reply | Promise<Reply>;

    abstract removeReply(id: string): Nullable<Reply> | Promise<Nullable<Reply>>;
}

export class Post {
    id: string;
    title: string;
    content: string;
    createdAt?: Nullable<Date>;
    updatedAt?: Nullable<Date>;
    comments?: Nullable<Nullable<Comment>[]>;
}

export class Reply {
    exampleField?: Nullable<number>;
}

type Nullable<T> = T | null;
