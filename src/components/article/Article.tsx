'use client';

import { Pagehead, Text } from '@primer/react';

import { PostData } from '@/lib/posts/types';

import 'zenn-content-css/lib/index.css';

export const Article = ({ post }: { post: PostData }) => {
  return (
    <article>
      <Pagehead>
        <Text fontSize={5}>{post.title}</Text>
      </Pagehead>
      <div className={'znc'} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
};
