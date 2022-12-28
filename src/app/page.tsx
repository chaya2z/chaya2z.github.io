import Link from 'next/link';

import Date from '@/components/date';
import { loadPosts } from '@/lib/posts/posts';

const Home = async () => {
  const allPosts = await loadPosts();
  return (
    <>
      <section>
        <h2>最新の記事</h2>
        <ul>
          {allPosts.map(({ created_at, title, postId, postDate }, i) => {
            if (i < 5) {
              return (
                <li key={created_at}>
                  <Link href={`/posts/${postDate.year}/${postDate.month}/${postDate.date}/${postId}`}>{title}</Link>
                  <br />
                  <small>
                    <Date dateString={created_at} />
                  </small>
                </li>
              );
            }
            return;
          })}
        </ul>
      </section>
    </>
  );
};

export default Home;
