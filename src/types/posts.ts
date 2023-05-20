export type PostParam = {
  postId: string;
  year: string;
  month: string;
  date: string;
};

export type PostsFilter = Partial<PostParam>;

export type PostMetadata = {
  created_at: string;
  updated_at?: string;
  title: string;
  description?: string;
  tags?: string[];
  series?: string;
  ogp_img_path?: string;
  is_draft?: boolean;
};

export type Post = PostMetadata & {
  param: PostParam;
  contentHtml: string;
};

export type PostPath = string;

export type LoadPostsPaths = (filter?: PostsFilter) => Promise<PostPath[]>;

export type LoadPosts = (paths: PostPath[]) => Post[];

export type MakePostParams = (paths: PostPath[]) => PostParam[];
