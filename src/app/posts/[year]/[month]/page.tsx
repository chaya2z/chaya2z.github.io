import PostsPage from '@/components/postsPage/postsPage';
import { makePostParams } from '@/lib/posts/posts';

const MonthPostsList = async ({ params }) => PostsPage(params);

export default MonthPostsList;

export const generateStaticParams = async () => {
  const posts = await makePostParams();

  return posts.map((post) => {
    return { ...post };
  });
};
