import Layout from "../../../../components/layout";
import { GetStaticProps, GetStaticPaths } from "next";
import { loadPostIds, loadPosts } from "../../../../lib/posts";
import { PostsList } from "../../../../components/postsList/PostsList";

export default function eachDatePostsList({ allDatePostsData }) {
    return (
        <Layout>
            <PostsList posts={allDatePostsData} filter={"date"} />
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
    const allDatePostsData = await loadPosts({
        year: params.year as string,
        month: params.month as string,
        date: params.date as string,
    });

    return {
        props: {
            allDatePostsData,
        },
    };
};
