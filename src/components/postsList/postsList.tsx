import { PostDate } from "../../lib/posts/types";
import Link from "next/link";
import Date from "../date";
import { loadPosts } from "../../lib/posts/posts";
import React from "react";

export const PostsList = (async ({ filter }: { filter?: PostDate }) => {
    const posts = await loadPosts(filter);

    if (posts.length === 0) {
        return (
            <>
                <h2>見つかりませんでした</h2>
            </>
        );
    }

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
}) as unknown as React.FC<{ filter?: PostDate }>;
