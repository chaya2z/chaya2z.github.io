import { Article } from '@/components/article/Article';
import { makePostParams, loadPosts } from '@/lib/posts/posts';

const Post = async ({ params }) => {
  const [post] = await loadPosts(params);

  return (
    <>
      <Article post={post} />
    </>
  );
};

export default Post;

export const generateStaticParams = async () => {
  const posts = await makePostParams();

  return posts.map((post) => {
    return { ...post };
  });
};
