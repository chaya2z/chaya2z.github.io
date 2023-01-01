'use client';

import { Heading, Pagehead } from '@primer/react';

const PostsPageHead = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <Pagehead>
      <Heading as={'h1'}>{title}</Heading>
      <small>{subTitle}</small>
    </Pagehead>
  );
};

export default PostsPageHead;
