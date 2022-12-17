import { Suspense } from "react";
import { PostsList } from "../../../../components/postsList/postsList";
import { loadPostIds } from "../../../../lib/posts/posts";

const MonthPostsList = async ({ params }) => {
    return (
        <Suspense fallback={<>aaa</>}>
            <PostsList filter={params} />
        </Suspense>
    );
};

export default MonthPostsList;

export const generateStaticParams = async () => {
    const posts = await loadPostIds();

    return posts.map((post) => {
        return { ...post, postId: post.postId.replace(/\.md$/, "") };
    });
};
