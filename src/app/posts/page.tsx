import { Suspense } from 'react';

import { PostsList } from '@/components/postsList/postsList';

const AllPostsList = async () => {
  return (
    <Suspense fallback={<>aaa</>}>
      <h1>記事一覧</h1>
      <PostsList />
    </Suspense>
  );
};

export default AllPostsList;
