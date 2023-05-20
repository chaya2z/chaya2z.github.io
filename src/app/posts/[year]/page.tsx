import PostsPage from '@/components/postsPage/postsPage';
import { loadPostsPaths, makePostParams } from '@/lib/posts/posts';

const YearPostsList = async ({ params }) => PostsPage(params);

export default YearPostsList;

export const generateStaticParams = async () => {
  const paths = await loadPostsPaths();
  const posts = makePostParams(paths);

  return posts.map((post) => {
    return { year: post.year };
  });
};
