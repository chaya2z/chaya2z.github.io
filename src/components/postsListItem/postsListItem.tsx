'use client';

import { Box, Text } from '@primer/react';
import Link from 'next/link';
import React from 'react';

import Date from '@/components/date/date';
import { Post } from '@/types/posts';

const PostsListItem = ({ post }: { post: Post }) => {
  const { created_at, param, title } = post;
  const path = param.year + '/' + param.month + '/' + param.date + '/' + param.postId;

  return (
    <>
      <Box as={'li'} sx={{ listStyle: 'none', paddingY: 3 }} display={'flex'} flexDirection={'column'}>
        <Link href={`/posts/${path}`} passHref legacyBehavior>
          <Text fontSize={4} as={'a'} sx={{ textDecoration: 'none' }}>
            {title}
          </Text>
        </Link>
        <small>
          <Date dateString={created_at} />
        </small>
      </Box>
    </>
  );
};

export default PostsListItem;
