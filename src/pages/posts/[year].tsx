import Layout from "../../components/layout";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { loadPostIds, loadPosts } from "../../lib/posts";
import { PostsList } from "../../components/postsList/PostsList";

export default function eachYearPostsList({ allYearPostsData }) {
    return (
        <Layout>
            <Head>
                <title>head title</title>
            </Head>
            <PostsList posts={allYearPostsData} filter={"year"} />
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
    const allYearPostsData = await loadPosts({
        year: params.year as string,
    });

    return {
        props: {
            allYearPostsData,
        },
    };
};
