import PostsPage from '@/components/postsPage/postsPage';
import { makePostParams } from '@/lib/posts/posts';

const YearPostsList = async ({ params }) => PostsPage(params);

export default YearPostsList;

export const generateStaticParams = async () => {
  const posts = await makePostParams();

  return posts.map((post) => {
    return { year: post.year };
  });
};
