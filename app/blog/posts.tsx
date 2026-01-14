import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface PostFrontmatter {
  title: string;
  date: string;
  tags: string;
  category: string;
  description: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  words: number;
  reading: number;
}

const postsDirectory = path.join(process.cwd(), "app/blog/posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md?$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = getPostStats(content);
  return {
    slug: realSlug,
    frontmatter: {
      ...data,
      date:
        data.date instanceof Date
          ? data.date.toISOString().split("T")[0]
          : data.date,
      title: data.title,
      description: data.description,
      category: data.category,
      tags: data.tags,
    } as PostFrontmatter,
    content,
    words: stats.words,
    reading: stats.minutes,
  };
}

export function getPostStats(markdownContent: string) {
  const stats = readingTime(markdownContent);
  return {
    words: stats.words,
    minutes: Math.ceil(stats.minutes),
  };
}

export function getAllPosts(): Post[] {
  const slugs = fs.readdirSync(path.join(process.cwd(), "app/blog/posts"));
  const posts = slugs.map((slug) => {
    const fileContents = fs.readFileSync(
      path.join(process.cwd(), "app/blog/posts", slug),
      "utf8"
    );
    const { data, content } = matter(fileContents);
    const stats = getPostStats(content);
    return {
      slug: slug.replace(/\.md?$/, ""),
      frontmatter: {
        ...data,
        date:
          data.date instanceof Date
            ? data.date.toISOString().split("T")[0]
            : data.date,
        title: data.title,
        description: data.description,
        category: data.category,
        tags: data.tags,
      } as PostFrontmatter,
      content,
      words: stats.words,
      reading: stats.minutes,
    };
  });
  return posts;
}
