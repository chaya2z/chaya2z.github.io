import { PostsList } from "../../../../../components/postsList/postsList";
import { Suspense } from "react";
import { loadPostIds } from "../../../../../lib/posts/posts";

const DatePostsList = ({ params }) => {
    return (
        <Suspense fallback={<>aaa</>}>
            <PostsList filter={params} />
        </Suspense>
    );
};

export default DatePostsList;

export const generateStaticParams = async () => {
    const posts = await loadPostIds();

    return posts.map((post) => {
        return { ...post, postId: post.postId.replace(/\.md$/, "") };
    });
};
