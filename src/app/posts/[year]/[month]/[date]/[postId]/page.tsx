import "zenn-content-css";
import { loadPostIds, loadPosts } from "../../../../../../lib/posts/posts";

const Post = async ({ params }) => {
    const [post] = await loadPosts(params);

    return (
        <article>
            <h1>{post.title}</h1>
            <div
                className="znc"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
        </article>
    );
};

export default Post;

export const generateStaticParams = async () => {
    const posts = await loadPostIds();

    return posts.map((post) => {
        return { ...post, postId: post.postId.replace(/\.md$/, "") };
    });
};
