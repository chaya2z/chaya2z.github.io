import { Article } from '@/components/article/Article';
import { makePostParams, loadPosts, loadPostsPaths } from '@/lib/posts/posts';

const Post = async ({ params }) => {
  const paths = await loadPostsPaths(params);
  const [post] = loadPosts(paths);

  return (
    <>
      <Article post={post} />
    </>
  );
};

export default Post;

export const generateStaticParams = async () => {
  const paths = await loadPostsPaths();
  const posts = makePostParams(paths);

  return posts.map((post) => {
    return { ...post };
  });
};
