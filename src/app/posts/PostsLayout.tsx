'use client';

import { Box, PageLayout } from '@primer/react';
import React, { ReactNode } from 'react';

import SidePane from '@/components/sidePane';

// { posts, children }: { posts: PostData[]; children: ReactNode }
const PostsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <PageLayout containerWidth={'large'}>
      <PageLayout.Content width={'medium'}>
        <Box backgroundColor={'white'} padding={4} borderRadius={8}>
          {children}
        </Box>
      </PageLayout.Content>
      <PageLayout.Pane sticky width={'small'}>
        <SidePane />
      </PageLayout.Pane>
    </PageLayout>
  );
};

export default PostsLayout;
