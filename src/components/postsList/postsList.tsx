import { LoadPostsFilter } from "../../lib/posts/types";
import Link from "next/link";
import Date from "../date";
import { loadPosts } from "../../lib/posts/posts";
import React from "react";

export const PostsList = (async ({ filter }: { filter?: LoadPostsFilter }) => {
    const posts = await loadPosts(filter);

    return (
        <>
            <section>
                <h2>{posts.length} 件見つかりました</h2>
                <ul>
                    {posts.map(({ created_at, title, postId, postDate }) => (
                        <li key={created_at}>
                            <Link
                                href={`/posts/${postDate.year}/${postDate.month}/${postDate.date}/${postId}`}
                            >
                                {title}
                            </Link>
                            <small>
                                <Date dateString={created_at} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}) as unknown as React.FC<{ filter?: LoadPostsFilter }>;
