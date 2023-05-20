import PostsPage from '@/components/postsPage/postsPage';
import { loadPostsPaths, makePostParams } from '@/lib/posts/posts';

const MonthPostsList = async ({ params }) => PostsPage(params);

export default MonthPostsList;

export const generateStaticParams = async () => {
  const paths = await loadPostsPaths();
  const posts = makePostParams(paths);

  return posts.map((post) => {
    return {
      year: post.year,
      month: post.month,
    };
  });
};
