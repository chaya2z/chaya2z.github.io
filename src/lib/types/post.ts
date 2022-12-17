export type PostMetadata = {
    created_at: string;
    title: string;
};

export type PostDate = {
    year: string;
    month: string;
    date: string;
};

export type Post = PostMetadata & {
    postId: string;
    postDate: PostDate;
    contentHtml: string;
};
