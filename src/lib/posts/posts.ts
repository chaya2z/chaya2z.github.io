import fs from 'fs';
import path from 'path';

import { glob } from 'glob';
import matter from 'gray-matter';
import markdown2Html from 'zenn-markdown-html';

import { LoadPosts, LoadPostsPaths, MakePostParams, PostMetadata, PostParam, PostPath } from '@/types/posts';

export const loadPostsPaths: LoadPostsPaths = async (filter) => {
  const { postId, year, month, date } = {
    postId: filter?.postId ?? '**',
    year: filter?.year ?? '**',
    month: filter?.month ?? '**',
    date: filter?.date ?? '**',
  };

  const paths: PostPath[] = await glob(`posts/${year}/${month}/${date}/${postId}.md`, {
    // only want the files, not the dirs
    nodir: true,
  });

  return paths;
};

export const loadPosts: LoadPosts = (paths: PostPath[]) => {
  return paths.reverse().map((fileName) => {
    // Read markdown-file as string
    const fullPath = path.join(process.cwd(), fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: metadata, content: blogContent } = matter(fileContents);

    // convert to HTML
    const contentHtml = markdown2Html(blogContent);

    const [, year, month, date, postId] = fileName.split('/');

    return {
      param: {
        postId: postId.replace(/\.md$/, ''),
        year,
        month,
        date,
      },
      contentHtml,
      ...(metadata as PostMetadata),
    };
  });
};

export const makePostParams: MakePostParams = (paths: PostPath[]) => {
  return paths.map((filePath): PostParam => {
    const [, year, month, date, postId] = filePath.split('/');
    return {
      postId: postId.replace(/\.md$/, ''),
      year,
      month,
      date,
    };
  });
};
