'use client';

import { Box } from '@primer/react';
import React from 'react';

import PostsListItem from '@/components/postsListItem/postsListItem';
import { PostData } from '@/lib/posts/types';

export const PostsList = ({ posts }: { posts: PostData[] }) => {
  return (
    <>
      <Box as={'ul'}>
        {posts.map((post, i) => (
          <PostsListItem post={post} key={i.toString()} />
        ))}
      </Box>
    </>
  );
};
