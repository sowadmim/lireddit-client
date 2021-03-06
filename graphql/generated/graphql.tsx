import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type ChangePasswordInput = {
  confirmPassword: Scalars['String'];
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['String'];
  user: User;
};

export type CreateCommentInput = {
  body: Scalars['String'];
  postId: Scalars['String'];
};

export type CreatePostInput = {
  body: Scalars['String'];
  file: Scalars['Upload'];
  title: Scalars['String'];
};

export type LoginInput = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: User;
  createComment: Comment;
  createPost: Post;
  deleteComment: Scalars['Boolean'];
  deletePost: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  login: User;
  logout: Scalars['Boolean'];
  register: User;
  updatePost: Post;
  vote: Array<Vote>;
};

export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};

export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};

export type MutationCreatePostArgs = {
  input: CreatePostInput;
};

export type MutationDeleteCommentArgs = {
  id: Scalars['String'];
};

export type MutationDeletePostArgs = {
  id: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationRegisterArgs = {
  input: RegisterInput;
};

export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};

export type MutationVoteArgs = {
  liked: Scalars['Boolean'];
  postId: Scalars['String'];
};

export type PaginatedComment = {
  __typename?: 'PaginatedComment';
  comments: Array<Comment>;
  hasMore: Scalars['Boolean'];
};

export type PaginatedPost = {
  __typename?: 'PaginatedPost';
  hasMore: Scalars['Boolean'];
  posts: Array<Post>;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  body: Scalars['String'];
  comments?: Maybe<Array<Comment>>;
  commentsCount: Scalars['Int'];
  createdAt: Scalars['String'];
  id: Scalars['String'];
  imageUrl: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
  votes?: Maybe<Array<Vote>>;
};

export type Query = {
  __typename?: 'Query';
  comments: PaginatedComment;
  me: User;
  post?: Maybe<Post>;
  posts: PaginatedPost;
};

export type QueryCommentsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  postId: Scalars['String'];
};

export type QueryPostArgs = {
  onEdit?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
};

export type QueryPostsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UpdatePostInput = {
  body: Scalars['String'];
  file?: Maybe<Scalars['Upload']>;
  id: Scalars['String'];
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type Vote = {
  __typename?: 'Vote';
  createdAt: Scalars['String'];
  id: Scalars['String'];
  liked: Scalars['Boolean'];
  updatedAt: Scalars['String'];
  user: User;
};

export type RegularPostFragment = {
  __typename?: 'Post';
  id: string;
  title: string;
  slug: string;
  body: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  commentsCount: number;
  author: { __typename?: 'User'; username: string };
  votes?:
    | Array<{
        __typename?: 'Vote';
        id: string;
        liked: boolean;
        user: { __typename?: 'User'; username: string };
      }>
    | null
    | undefined;
};

export type RegularUserFragment = {
  __typename?: 'User';
  id: string;
  username: string;
  email: string;
};

export type RegularVoteFragment = {
  __typename?: 'Vote';
  id: string;
  liked: boolean;
  user: { __typename?: 'User'; username: string };
};

export type RegularCommentFragment = {
  __typename?: 'Comment';
  id: string;
  body: string;
  createdAt: string;
  user: { __typename?: 'User'; username: string };
};

export type VotedPostFragment = {
  __typename?: 'Post';
  votes?:
    | Array<{
        __typename?: 'Vote';
        id: string;
        liked: boolean;
        user: { __typename?: 'User'; username: string };
      }>
    | null
    | undefined;
};

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;

export type ChangePasswordMutation = {
  __typename?: 'Mutation';
  changePassword: {
    __typename?: 'User';
    id: string;
    username: string;
    email: string;
  };
};

export type CreateCommentMutationVariables = Exact<{
  input: CreateCommentInput;
}>;

export type CreateCommentMutation = {
  __typename?: 'Mutation';
  createComment: {
    __typename?: 'Comment';
    id: string;
    body: string;
    createdAt: string;
    user: { __typename?: 'User'; username: string };
  };
};

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
}>;

export type CreatePostMutation = {
  __typename?: 'Mutation';
  createPost: {
    __typename?: 'Post';
    id: string;
    title: string;
    slug: string;
    body: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
    commentsCount: number;
    author: { __typename?: 'User'; username: string };
    votes?:
      | Array<{
          __typename?: 'Vote';
          id: string;
          liked: boolean;
          user: { __typename?: 'User'; username: string };
        }>
      | null
      | undefined;
  };
};

export type DeleteCommentMutationVariables = Exact<{
  deleteCommentId: Scalars['String'];
}>;

export type DeleteCommentMutation = {
  __typename?: 'Mutation';
  deleteComment: boolean;
};

export type DeletePostMutationVariables = Exact<{
  deletePostId: Scalars['String'];
}>;

export type DeletePostMutation = {
  __typename?: 'Mutation';
  deletePost: boolean;
};

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;

export type ForgotPasswordMutation = {
  __typename?: 'Mutation';
  forgotPassword: boolean;
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: { __typename?: 'User'; id: string; username: string; email: string };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: 'Mutation'; logout: boolean };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;

export type RegisterMutation = {
  __typename?: 'Mutation';
  register: {
    __typename?: 'User';
    id: string;
    username: string;
    email: string;
  };
};

export type UpdatePostMutationVariables = Exact<{
  input: UpdatePostInput;
}>;

export type UpdatePostMutation = {
  __typename?: 'Mutation';
  updatePost: {
    __typename?: 'Post';
    id: string;
    title: string;
    slug: string;
    body: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
    commentsCount: number;
    author: { __typename?: 'User'; username: string };
    votes?:
      | Array<{
          __typename?: 'Vote';
          id: string;
          liked: boolean;
          user: { __typename?: 'User'; username: string };
        }>
      | null
      | undefined;
  };
};

export type VoteMutationVariables = Exact<{
  liked: Scalars['Boolean'];
  postId: Scalars['String'];
}>;

export type VoteMutation = {
  __typename?: 'Mutation';
  vote: Array<{
    __typename?: 'Vote';
    id: string;
    liked: boolean;
    user: { __typename?: 'User'; username: string };
  }>;
};

export type CommentsQueryVariables = Exact<{
  postId: Scalars['String'];
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;

export type CommentsQuery = {
  __typename?: 'Query';
  comments: {
    __typename?: 'PaginatedComment';
    hasMore: boolean;
    comments: Array<{
      __typename?: 'Comment';
      id: string;
      body: string;
      createdAt: string;
      user: { __typename?: 'User'; username: string };
    }>;
  };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: 'Query';
  me: { __typename?: 'User'; id: string; username: string; email: string };
};

export type PostQueryVariables = Exact<{
  slug: Scalars['String'];
  onEdit?: Maybe<Scalars['Boolean']>;
}>;

export type PostQuery = {
  __typename?: 'Query';
  post?:
    | {
        __typename?: 'Post';
        id: string;
        title: string;
        slug: string;
        body: string;
        imageUrl: string;
        createdAt: string;
        updatedAt: string;
        commentsCount: number;
        author: { __typename?: 'User'; username: string };
        votes?:
          | Array<{
              __typename?: 'Vote';
              id: string;
              liked: boolean;
              user: { __typename?: 'User'; username: string };
            }>
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type PostsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;

export type PostsQuery = {
  __typename?: 'Query';
  posts: {
    __typename?: 'PaginatedPost';
    hasMore: boolean;
    posts: Array<{
      __typename?: 'Post';
      id: string;
      title: string;
      slug: string;
      body: string;
      imageUrl: string;
      createdAt: string;
      updatedAt: string;
      commentsCount: number;
      author: { __typename?: 'User'; username: string };
      votes?:
        | Array<{
            __typename?: 'Vote';
            id: string;
            liked: boolean;
            user: { __typename?: 'User'; username: string };
          }>
        | null
        | undefined;
    }>;
  };
};

export const RegularVoteFragmentDoc = gql`
  fragment RegularVote on Vote {
    id
    liked
    user {
      username
    }
  }
`;
export const RegularPostFragmentDoc = gql`
  fragment RegularPost on Post {
    id
    title
    slug
    body
    imageUrl
    createdAt
    updatedAt
    author {
      username
    }
    votes {
      ...RegularVote
    }
    commentsCount
  }
  ${RegularVoteFragmentDoc}
`;
export const RegularUserFragmentDoc = gql`
  fragment RegularUser on User {
    id
    username
    email
  }
`;
export const RegularCommentFragmentDoc = gql`
  fragment RegularComment on Comment {
    id
    body
    user {
      username
    }
    createdAt
  }
`;
export const VotedPostFragmentDoc = gql`
  fragment VotedPost on Post {
    votes {
      id
      liked
      user {
        username
      }
    }
  }
`;
export const ChangePasswordDocument = gql`
  mutation ChangePassword($input: ChangePasswordInput!) {
    changePassword(input: $input) {
      ...RegularUser
    }
  }
  ${RegularUserFragmentDoc}
`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >(ChangePasswordDocument, options);
}
export type ChangePasswordMutationHookResult = ReturnType<
  typeof useChangePasswordMutation
>;
export type ChangePasswordMutationResult =
  Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>;
export const CreateCommentDocument = gql`
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      ...RegularComment
    }
  }
  ${RegularCommentFragmentDoc}
`;
export type CreateCommentMutationFn = Apollo.MutationFunction<
  CreateCommentMutation,
  CreateCommentMutationVariables
>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(CreateCommentDocument, options);
}
export type CreateCommentMutationHookResult = ReturnType<
  typeof useCreateCommentMutation
>;
export type CreateCommentMutationResult =
  Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<
  CreateCommentMutation,
  CreateCommentMutationVariables
>;
export const CreatePostDocument = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      ...RegularPost
    }
  }
  ${RegularPostFragmentDoc}
`;
export type CreatePostMutationFn = Apollo.MutationFunction<
  CreatePostMutation,
  CreatePostMutationVariables
>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePostMutation,
    CreatePostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(
    CreatePostDocument,
    options
  );
}
export type CreatePostMutationHookResult = ReturnType<
  typeof useCreatePostMutation
>;
export type CreatePostMutationResult =
  Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<
  CreatePostMutation,
  CreatePostMutationVariables
>;
export const DeleteCommentDocument = gql`
  mutation DeleteComment($deleteCommentId: String!) {
    deleteComment(id: $deleteCommentId)
  }
`;
export type DeleteCommentMutationFn = Apollo.MutationFunction<
  DeleteCommentMutation,
  DeleteCommentMutationVariables
>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      deleteCommentId: // value for 'deleteCommentId'
 *   },
 * });
 */
export function useDeleteCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCommentMutation,
    DeleteCommentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteCommentMutation,
    DeleteCommentMutationVariables
  >(DeleteCommentDocument, options);
}
export type DeleteCommentMutationHookResult = ReturnType<
  typeof useDeleteCommentMutation
>;
export type DeleteCommentMutationResult =
  Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<
  DeleteCommentMutation,
  DeleteCommentMutationVariables
>;
export const DeletePostDocument = gql`
  mutation DeletePost($deletePostId: String!) {
    deletePost(id: $deletePostId)
  }
`;
export type DeletePostMutationFn = Apollo.MutationFunction<
  DeletePostMutation,
  DeletePostMutationVariables
>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      deletePostId: // value for 'deletePostId'
 *   },
 * });
 */
export function useDeletePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletePostMutation,
    DeletePostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(
    DeletePostDocument,
    options
  );
}
export type DeletePostMutationHookResult = ReturnType<
  typeof useDeletePostMutation
>;
export type DeletePostMutationResult =
  Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<
  DeletePostMutation,
  DeletePostMutationVariables
>;
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument, options);
}
export type ForgotPasswordMutationHookResult = ReturnType<
  typeof useForgotPasswordMutation
>;
export type ForgotPasswordMutationResult =
  Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ...RegularUser
    }
  }
  ${RegularUserFragmentDoc}
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`;
export type LogoutMutationFn = Apollo.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    options
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>;
export const RegisterDocument = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      ...RegularUser
    }
  }
  ${RegularUserFragmentDoc}
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const UpdatePostDocument = gql`
  mutation UpdatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
      ...RegularPost
    }
  }
  ${RegularPostFragmentDoc}
`;
export type UpdatePostMutationFn = Apollo.MutationFunction<
  UpdatePostMutation,
  UpdatePostMutationVariables
>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(
    UpdatePostDocument,
    options
  );
}
export type UpdatePostMutationHookResult = ReturnType<
  typeof useUpdatePostMutation
>;
export type UpdatePostMutationResult =
  Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<
  UpdatePostMutation,
  UpdatePostMutationVariables
>;
export const VoteDocument = gql`
  mutation Vote($liked: Boolean!, $postId: String!) {
    vote(liked: $liked, postId: $postId) {
      ...RegularVote
    }
  }
  ${RegularVoteFragmentDoc}
`;
export type VoteMutationFn = Apollo.MutationFunction<
  VoteMutation,
  VoteMutationVariables
>;

/**
 * __useVoteMutation__
 *
 * To run a mutation, you first call `useVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteMutation, { data, loading, error }] = useVoteMutation({
 *   variables: {
 *      liked: // value for 'liked'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useVoteMutation(
  baseOptions?: Apollo.MutationHookOptions<VoteMutation, VoteMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<VoteMutation, VoteMutationVariables>(
    VoteDocument,
    options
  );
}
export type VoteMutationHookResult = ReturnType<typeof useVoteMutation>;
export type VoteMutationResult = Apollo.MutationResult<VoteMutation>;
export type VoteMutationOptions = Apollo.BaseMutationOptions<
  VoteMutation,
  VoteMutationVariables
>;
export const CommentsDocument = gql`
  query Comments($postId: String!, $limit: Int!, $cursor: String) {
    comments(postId: $postId, limit: $limit, cursor: $cursor) {
      comments {
        ...RegularComment
      }
      hasMore
    }
  }
  ${RegularCommentFragmentDoc}
`;

/**
 * __useCommentsQuery__
 *
 * To run a query within a React component, call `useCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useCommentsQuery(
  baseOptions: Apollo.QueryHookOptions<CommentsQuery, CommentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CommentsQuery, CommentsQueryVariables>(
    CommentsDocument,
    options
  );
}
export function useCommentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CommentsQuery,
    CommentsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CommentsQuery, CommentsQueryVariables>(
    CommentsDocument,
    options
  );
}
export type CommentsQueryHookResult = ReturnType<typeof useCommentsQuery>;
export type CommentsLazyQueryHookResult = ReturnType<
  typeof useCommentsLazyQuery
>;
export type CommentsQueryResult = Apollo.QueryResult<
  CommentsQuery,
  CommentsQueryVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      ...RegularUser
    }
  }
  ${RegularUserFragmentDoc}
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const PostDocument = gql`
  query Post($slug: String!, $onEdit: Boolean) {
    post(slug: $slug, onEdit: $onEdit) {
      ...RegularPost
    }
  }
  ${RegularPostFragmentDoc}
`;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      onEdit: // value for 'onEdit'
 *   },
 * });
 */
export function usePostQuery(
  baseOptions: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
}
export function usePostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(
    PostDocument,
    options
  );
}
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const PostsDocument = gql`
  query posts($limit: Int!, $cursor: String) {
    posts(limit: $limit, cursor: $cursor) {
      posts {
        ...RegularPost
      }
      hasMore
    }
  }
  ${RegularPostFragmentDoc}
`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function usePostsQuery(
  baseOptions: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    options
  );
}
export function usePostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    options
  );
}
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<
  PostsQuery,
  PostsQueryVariables
>;
