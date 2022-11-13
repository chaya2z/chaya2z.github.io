import fs from "fs";
import path from "path";
import glob from "glob";
import matter from "gray-matter";

// related to HTML or Markdown
import {remark} from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeShiki from "rehype-shiki";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";
import {postMetadata} from "../types/posts";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPostIds(year = "**", month = "**", date = "**") {
  const files = glob.sync(`posts/${year}/${month}/${date}/*.md`);

  // Returns an array looks like this:
  // [
  //     {
  //         id: 'post01',
  //         year: '2022',
  //         month: '01',
  //         date: '01'
  //     },
  //     {
  //         id: 'post02',
  //         year: '2023',
  //         month: '12',
  //         date: '12'
  //     }
  // ]
  return files.map((filePath) => {
    const pathArray = filePath.split("/");
    return {
      params: {
        id: pathArray[4],
        year: pathArray[1],
        month: pathArray[2],
        date: pathArray[3],
      }
    };
  });
}

export function getSortedPostsData(
  year?: string,
  month?: string,
  date?: string
) {
  // Get only file names ( not dir name ) under /posts
  const fileNames = getAllPostIds(year, month, date);
  return fileNames.reverse().map((fileName) => {
    const {id, year, month, date} = fileName;

    // Read markdown file as string
    const fullPath = path.join(
      postsDirectory,
      `/${year}/${month}/${date}/${id}`
    );
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: metadata } = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      year,
      month,
      date,
      ...(metadata as postMetadata),
    };
  });
}

export async function getPostData(id, year, month, date) {
  const fullPath = path.join(
    postsDirectory,
    `/${year}/${month}/${date}/${id}`
  );
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkGfm)
    // formula
    .use(remarkMath)
    // Add TOC
    .use(remarkSlug)
    .use(remarkToc, {heading: "目次", maxDepth: 2})
    // mdast into hast
    .use(remarkRehype)
    // hast into HTML
    .use(rehypeStringify)
    // Add syntax highlight
    .use(rehypeShiki)
    // KaTeX
    .use(rehypeKatex)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    year,
    month,
    date,
    contentHtml,
    ...(matterResult.data as postMetadata),
  };
}
