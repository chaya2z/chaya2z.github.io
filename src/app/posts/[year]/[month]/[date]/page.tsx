import PostsPage from '@/components/postsPage/postsPage';
import { makePostParams } from '@/lib/posts/posts';

const DatePostsList = async ({ params }) => PostsPage(params);

export default DatePostsList;

export const generateStaticParams = async () => {
  const posts = await makePostParams();

  return posts.map((post) => {
    return {
      year: post.year,
      month: post.month,
      date: post.date,
    };
  });
};
