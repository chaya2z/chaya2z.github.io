'use client';

import { Box, Text } from '@primer/react';
import Link from 'next/link';
import React from 'react';

import Date from '@/components/date/date';
import { PostData } from '@/lib/posts/types';

const PostsListItem = ({ post }: { post: PostData }) => {
  const { created_at, postDate, postId, title } = post;
  const path = postDate.year + '/' + postDate.month + '/' + postDate.date + '/' + postId;

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
