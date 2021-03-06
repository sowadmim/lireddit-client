import { EmojiSadIcon } from '@heroicons/react/solid';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Waypoint } from 'react-waypoint';
import Post from '../components/post/Post';
import PostSkeleton from '../components/post/PostSkeleton';
import { PostsDocument, usePostsQuery } from '../graphql/generated/graphql';
import { initializeApollo } from '../lib/graphql';
import { useUserState } from '../store/user';

const Home: NextPage<{}> = () => {
  const { data, loading, fetchMore } = usePostsQuery({
    variables: { limit: 10 },
  });
  const [user] = useUserState();

  const handleOnEnter = () => {
    if (!data?.posts.hasMore) return;
    fetchMore({
      variables: {
        limit: 10,
        cursor: data?.posts.posts[data?.posts.posts.length - 1].createdAt,
      },
      updateQuery: (pv, { fetchMoreResult }) => {
        if (!fetchMoreResult) return pv;
        return {
          posts: {
            posts: [...pv.posts.posts, ...fetchMoreResult.posts.posts],
            hasMore: fetchMoreResult.posts.hasMore,
          },
        };
      },
    });
  };

  return (
    <>
      <div className='flex justify-between mb-8'>
        <h1 className='text-3xl md:text-4xl font-medium'>Posts</h1>
        {user && (
          <Link href='/posts/create' passHref>
            <a className='btn outline'>Create post</a>
          </Link>
        )}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data?.posts.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
        {loading ? (
          [75, 150, 300, 700].map((d) => <PostSkeleton key={d} delay={d} />)
        ) : (
          <Waypoint onEnter={handleOnEnter} />
        )}
      </div>
      {!data?.posts.hasMore && (
        <div className='flex flex-col items-center mt-8'>
          <EmojiSadIcon className='w-24 gray-400' />
          <h1 className='gray-300'>No More Post</h1>
        </div>
      )}
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const client = initializeApollo();
  await client.query({ query: PostsDocument, variables: { limit: 10 } });

  return { props: { initialApolloState: client.cache.extract() } };
};
