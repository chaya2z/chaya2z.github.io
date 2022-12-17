import "zenn-content-css";
import { loadPosts } from "../../../../../../lib/posts/posts";

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
