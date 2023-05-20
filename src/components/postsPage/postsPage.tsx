import { PostsList } from '@/components/postsList/postsList';
import PostsPageHead from '@/components/postsPageHead/postsPageHead';
import { loadPosts, loadPostsPaths } from '@/lib/posts/posts';
import { PostParam } from '@/types/posts';

const PostsPage = async (filter?: PostParam) => {
  const paths = await loadPostsPaths(filter);
  const posts = loadPosts(paths);
  const head = '記事一覧';
  const description = `${posts.length} 件見つかりました`;

  return (
    <>
      <PostsPageHead title={head} subTitle={description} />
      <PostsList posts={posts} />
    </>
  );
};

export default PostsPage;
