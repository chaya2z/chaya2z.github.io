import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import { loadPosts } from "../lib/posts";
import { Post } from "../lib/types/post";

export const getStaticProps: GetStaticProps = async () => {
    const allPosts = await loadPosts();

    return {
        props: {
            allPosts,
        },
    };
};

export default function Home({ allPosts }: { allPosts: Post[] }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>IT技術を中心としたブログ</p>
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>最新の記事</h2>
                <ul className={utilStyles.list}>
                    {allPosts.map(
                        ({ created_at, title, postId, postDate }, i) => {
                            if (i < 5) {
                                return (
                                    <li
                                        className={utilStyles.listItem}
                                        key={created_at}
                                    >
                                        <Link
                                            href={`/posts/${postDate.year}/${postDate.month}/${postDate.date}/${postId}`}
                                        >
                                            {title}
                                        </Link>
                                        <br />
                                        <small className={utilStyles.lightText}>
                                            <Date dateString={created_at} />
                                        </small>
                                    </li>
                                );
                            }
                            return;
                        }
                    )}
                </ul>
            </section>
        </Layout>
    );
}
