import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import glob from "glob";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPostIds(year = "**", month = "**", date = "**") {
    const files = glob.sync(`posts/${year}/${month}/${date}/*.md`);

    // Returns an array that looks like this:
    // [
    //     {
    //         params: {
    //             id: 'post01',
    //             year: '2022',
    //             month: '01',
    //             date: '01'
    //         }
    //     },
    //     {
    //         params: {
    //             id: 'post02',
    //             year: '2023',
    //             month: '12',
    //             date: '12'
    //         }
    //     }
    // ]
    return files.map((filePath) => {
        const pathArray = filePath.split("/");
        return {
            params: {
                id: pathArray[4].replace(/\.md$/, ""),
                year: pathArray[1],
                month: pathArray[2],
                date: pathArray[3],
            },
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
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.params.id;
        const year = fileName.params.year;
        const month = fileName.params.month;
        const date = fileName.params.date;

        // Read markdown file as string
        const fullPath = path.join(
            postsDirectory,
            `/${year}/${month}/${date}/${id}.md`
        );
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            year,
            month,
            date,
            ...(matterResult.data as { created_at: string; title: string }),
        };
    });
    // Sort posts by date
    return allPostsData.sort(({ created_at: a }, { created_at: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}

export async function getPostData(id, year, month, date) {
    const fullPath = path.join(
        postsDirectory,
        `/${year}/${month}/${date}/${id}.md`
    );
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        year,
        month,
        date,
        contentHtml,
        ...(matterResult.data as { created_at: string; title: string }),
    };
}
