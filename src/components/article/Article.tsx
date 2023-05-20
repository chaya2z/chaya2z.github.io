'use client';

import { Pagehead, Text } from '@primer/react';

import { Post } from '@/types/posts';

import 'zenn-content-css/lib/index.css';

export const Article = ({ post }: { post: Post }) => {
  return (
    <article>
      <Pagehead>
        <Text fontSize={5}>{post.title}</Text>
      </Pagehead>
      <div className={'znc'} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
};
