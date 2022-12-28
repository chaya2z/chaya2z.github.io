'use client';

import { PageLayout } from '@primer/react';
import React, { ReactNode } from 'react';

import SidePane from '@/components/sidePane';

// { posts, children }: { posts: PostData[]; children: ReactNode }
const PostsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <PageLayout>
      <PageLayout.Content>{children}</PageLayout.Content>
      <PageLayout.Pane sticky>
        <SidePane />
      </PageLayout.Pane>
    </PageLayout>
  );
};

export default PostsLayout;
