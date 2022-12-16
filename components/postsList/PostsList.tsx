import { Post, PostDate } from "../../lib/types/post";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Date from "../date";

type Filter = "year" | "month" | "date";

type Props = {
    posts: Post[];
    filter: Filter;
};

const Title = ({
    filter,
    postDate,
}: {
    filter: Filter;
    postDate: PostDate;
}) => {
    const { year, month, date } = postDate;
    switch (filter) {
        case "year":
            return (
                <h1 className={utilStyles.headingXl}>
                    {year}年 に投稿された記事
                </h1>
            );
        case "month":
            return (
                <h1 className={utilStyles.headingXl}>
                    {year}年 {month}月 に投稿された記事
                </h1>
            );
        case "date":
            return (
                <h1 className={utilStyles.headingXl}>
                    {year}年 {month}月 {date}日 に投稿された記事
                </h1>
            );
    }
};

export const PostsList = ({ posts, filter }: Props) => {
    if (posts.length === 0) {
        return (
            <>
                <h1>見つかりませんでした</h1>
            </>
        );
    }

    return (
        <>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <Title filter={filter} postDate={posts[0].postDate} />
                <h2 className={utilStyles.headingLg}>
                    {posts.length} 件見つかりました
                </h2>
                <ul className={utilStyles.list}>
                    {posts.map(({ created_at, title, postId, postDate }) => (
                        <li className={utilStyles.listItem} key={created_at}>
                            <Link
                                href={`/posts/${postDate.year}/${postDate.month}/${postDate.date}/${postId}`}
                            >
                                {title}
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={created_at} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};
