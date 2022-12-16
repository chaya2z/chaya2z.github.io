import glob from "glob";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import markdown2Html from "zenn-markdown-html";
import { postMetadata } from "../types/posts";
import { Post } from "./types/post";

type LoadPostsFilter = {
    id?: string;
    year?: string;
    month?: string;
    date?: string;
};

const defaults: LoadPostsFilter = {
    id: "**",
    year: "**",
    month: "**",
    date: "**",
};

export const loadPosts = async (
    filter = {} as LoadPostsFilter
): Promise<Post[]> => {
    const { id, year, month, date } = { ...defaults, ...filter };

    const filePaths: string[] = glob.sync(
        `posts/${year}/${month}/${date}/${id}`,
        {
            nosort: false, // sort list
            nodir: true, // only files ( not dir )
        }
    );

    return filePaths.reverse().map((fileName) => {
        // Read markdown-file as string
        const fullPath = path.join(process.cwd(), fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data: metadata, content: blogContent } = matter(fileContents);

        // convert to HTML
        const contentHtml = markdown2Html(blogContent);

        const [, year, month, date, postId] = fileName.split("/");

        return {
            postId,
            postDate: { year, month, date },
            contentHtml,
            ...(metadata as postMetadata),
        };
    });
};

export function loadPostIds(year = "**", month = "**", date = "**") {
    const files = glob.sync(`posts/${year}/${month}/${date}/*.md`);

    return files.map((filePath) => {
        const [, year, month, date, id] = filePath.split("/");
        return {
            params: {
                id,
                year,
                month,
                date,
            },
        };
    });
}
