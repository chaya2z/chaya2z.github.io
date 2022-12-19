import Link from 'next/link';

import Date from '@/components/date';
import Layout from '@/components/layout';
import { loadPosts } from '@/lib/posts/posts';
import utilStyles from '@/styles/utils.module.css';

const Home = async () => {
  const allPosts = await loadPosts();
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>IT技術を中心としたブログ</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>最新の記事</h2>
        <ul className={utilStyles.list}>
          {allPosts.map(({ created_at, title, postId, postDate }, i) => {
            if (i < 5) {
              return (
                <li className={utilStyles.listItem} key={created_at}>
                  <Link href={`/posts/${postDate.year}/${postDate.month}/${postDate.date}/${postId}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={created_at} />
                  </small>
                </li>
              );
            }
            return;
          })}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
