import Layout from "../../../../../components/layout";
import Date from "../../../../../components/date";
import utilStyles from "../../../../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next";
import { loadPostIds, loadPosts } from "../../../../../lib/posts";

import "zenn-content-css";

export default function Post({ postData }) {
    return (
        <Layout>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.created_at} />
                </div>
                <div
                    className="znc"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </article>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = loadPostIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const [postData] = await loadPosts({
        id: params.id as string,
        year: params.year as string,
        month: params.month as string,
        date: params.date as string,
    });

    return {
        props: {
            postData,
        },
    };
};
