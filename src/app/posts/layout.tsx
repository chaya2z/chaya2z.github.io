import { ReactNode } from 'react';

import PostsLayout from '@/app/posts/PostsLayout';

const PostsLayoutWrapper = async ({ children }: { children: ReactNode }) => {
  return <PostsLayout>{children}</PostsLayout>;
};

export default PostsLayoutWrapper;
