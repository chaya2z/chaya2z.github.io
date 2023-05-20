'use client';

import { Box } from '@primer/react';
import React from 'react';

import PostsListItem from '@/components/postsListItem/postsListItem';
import { Post } from '@/types/posts';

export const PostsList = ({ posts }: { posts: Post[] }) => {
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
