import Layout from '../../components/layout'
import {getAllPostIds, getSortedPostsData,} from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import Head from "next/head";
import Link from "next/link";
import Date from "../../components/date";

export default function eachYearPostsList({ allYearPostsData }) {
    return (
        <Layout>
            <Head>
                <title>head title</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h1 className={utilStyles.headingXl}>{allYearPostsData[0].year}年 に投稿された記事</h1>
                <h2 className={utilStyles.headingLg}>{allYearPostsData.length} 件見つかりました</h2>
                <ul className={utilStyles.list}>
                    {allYearPostsData.map(({ id, year, month, date, created_at, title }) => (
                        <li className={utilStyles.listItem} key={created_at}>
                            <Link href={`/posts/${year}/${month}/${date}/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={created_at} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}


export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const allYearPostsData = getSortedPostsData(params.year)
    return {
        props: {
            allYearPostsData
        }
    }
}
