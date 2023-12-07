import path from "path";
import fs from "fs";
import matter from "gray-matter";


const postsDirectory = path.join(process.cwd(), "posts");

//mdファイルのデータを取り出す
export function getPostsData(){
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath,"utf-8");
    const matterResults = matter(fileContents);
    // idとデータを返却する

    return {
      id, 
      ...matterResults.data,

    };
  });
  return allPostsData;
}
