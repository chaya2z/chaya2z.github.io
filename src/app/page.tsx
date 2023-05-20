import About from '@/app/About';
import HomeLayout from '@/app/HomeLayout';
import RecentPosts from '@/app/RecentPosts';
import { loadPosts, loadPostsPaths } from '@/lib/posts/posts';

const Home = async () => {
  const paths = await loadPostsPaths();
  const posts = loadPosts(paths);

  return (
    <HomeLayout>
      <About />
      <RecentPosts posts={posts} />
    </HomeLayout>
  );
};

export default Home;
