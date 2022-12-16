import Layout from "../../../components/layout";
import { GetStaticProps, GetStaticPaths } from "next";
import { loadPostIds, loadPosts } from "../../../lib/posts";
import { PostsList } from "../../../components/postsList/PostsList";

export default function eachMonthPostsList({ allMonthPostsData }) {
    return (
        <Layout>
            <PostsList posts={allMonthPostsData} filter={"month"} />
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
    const allMonthPostsData = await loadPosts({
        year: params.year as string,
        month: params.month as string,
    });

    return {
        props: {
            allMonthPostsData,
        },
    };
};
