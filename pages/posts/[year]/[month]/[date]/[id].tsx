import Layout from "../../../../../components/layout";
import { getAllPostIds, getPostData } from "../../../../../lib/posts";
import Date from "../../../../../components/date";
import utilStyles from "../../../../../styles/utils.module.css";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

export default function Post({
    postData,
}: {
    postData: {
        title: string;
        created_at: string;
        contentHtml: string;
    };
}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.created_at} />
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </article>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(
        params.id as string,
        params.year as string,
        params.month as string,
        params.date as string
    );
    return {
        props: {
            postData,
        },
    };
};
