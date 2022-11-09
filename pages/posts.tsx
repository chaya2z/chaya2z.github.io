import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};

export default function Posts({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle} 投稿記事一覧</title>
            </Head>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>すべての記事一覧</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(
                        ({ id, year, month, date, created_at, title }) => {
                            return (
                                <li
                                    className={utilStyles.listItem}
                                    key={created_at}
                                >
                                    <Link
                                        href={`/posts/${year}/${month}/${date}/${id}`}
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
                    )}
                </ul>
            </section>
        </Layout>
    );
}
