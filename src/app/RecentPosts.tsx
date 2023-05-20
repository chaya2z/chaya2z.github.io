'use client';

import { Box, Heading } from '@primer/react';
import Link from 'next/link';
import React from 'react';

import Date from '@/components/date/date';
import { Post } from '@/types/posts';

const About = ({ posts }: { posts: Post[] }) => {
  return (
    <section>
      <Heading>最新の記事</Heading>
      <Box as={'ul'}>
        {posts.slice(0, 5).map(({ created_at, title, param }, i) => (
          <Box as={'li'} key={i.toString()}>
            <small>
              <Date dateString={created_at} />
            </small>
            <Link href={`/posts/${param.year}/${param.month}/${param.date}/${param.postId}`}>{title}</Link>
          </Box>
        ))}
      </Box>
    </section>
  );
};

export default About;
