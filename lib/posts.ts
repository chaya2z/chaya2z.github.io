import glob from "glob";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import markdown2Html from "zenn-markdown-html";
import {postMetadata} from "../types/posts";

// export const searchPosts = async (id = "**", year = "**", month = "**", date = "**") => {
export async function getTestPostData(id, year, month, date) {
  const filePaths: string[] = glob.sync(`posts/${year}/${month}/${date}/${id}`);

  return filePaths.reverse().map((fileName) => {
    // Read markdown-file as string
    const fullPath = path.join(process.cwd(), fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: metadata, content: blogContent } = matter(fileContents);

    // convert to HTML
    const contentHtml = markdown2Html(blogContent)

    return {
      fileName,
      contentHtml,
      ...(metadata as postMetadata),
    };
  });
}

