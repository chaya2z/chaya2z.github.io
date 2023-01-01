import { PostsList } from '@/components/postsList/postsList';
import PostsPageHead from '@/components/postsPageHead/postsPageHead';
import { loadPosts } from '@/lib/posts/posts';
import { LoadPostsFilter } from '@/lib/posts/types';

const PostsPage = async (filter?: LoadPostsFilter) => {
  const posts = await loadPosts(filter);
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