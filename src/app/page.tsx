import About from '@/app/About';
import HomeLayout from '@/app/HomeLayout';
import RecentPosts from '@/app/RecentPosts';
import { loadPosts } from '@/lib/posts/posts';

const Home = async () => {
  const posts = await loadPosts();
  return (
    <HomeLayout>
      <About />
      <RecentPosts posts={posts} />
    </HomeLayout>
  );
};

export default Home;
