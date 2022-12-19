import { Suspense } from 'react';

import { PostsList } from '@/components/postsList/postsList';
import { makePostParams } from '@/lib/posts/posts';

const YearPostsList = async ({ params }) => {
  return (
    <Suspense fallback={<>aaa</>}>
      <PostsList filter={params} />
    </Suspense>
  );
};

export default YearPostsList;

export const generateStaticParams = async () => {
  const posts = await makePostParams();

  return posts.map((post) => {
    return { ...post };
  });
};
