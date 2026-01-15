import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug } from "@/app/blog/posts";
import Image from "next/image";
import { CalendarDays, Tag, Clock, PenTool } from "lucide-react";
import rehypePrettyCode from "rehype-pretty-code";

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter, content } = getPostBySlug(slug);
  const prettyCodeOptions = {
    theme: "one-dark-pro",
  };
  return (
    <>
      <div className="fixed inset-0 -z-10 w-full h-full">
        <Image
          src="/article-bg.jpg"
          alt="Background"
          fill
          className="object-cover -z-10 inset-0"
          priority
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 mt-8 sm:px-6 mb-20">
        {/* 2. 主卡片容器：增加毛玻璃、边框、阴影 */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 overflow-hidden">
          {/* 3. 文章头部 Header */}
          <div className="p-8 md:p-12 border-b border-gray-100">
            {/* 标题：加大字号，收紧字间距 */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6 text-center md:text-left">
              {frontmatter.title}
            </h1>

            {/* 元信息栏*/}
            <div className="flex items-center gap-6 text-gray-500 text-sm md:text-base">
              {/* 分类标签 */}
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Tag className="w-3 h-3" />
                {frontmatter.category || "未分类"}
              </span>
              {/* 日期*/}
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                <time>{frontmatter.date}</time>
              </div>
              {/* 阅读时间 */}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{frontmatter.reading} 分钟阅读</span>
              </div>
              {/* 字数 */}
              <div className="flex items-center gap-2">
                <PenTool className="w-4 h-4" />
                <span>{frontmatter.words} 字</span>
              </div>
            </div>
          </div>

          {/* 4. 正文区域 Prose 优化 */}
          <div className="p-8 md:p-12">
            <article
              className="
            prose prose-lg prose-slate max-w-none 
            dark:prose-invert
            prose-headings:font-bold prose-headings:tracking-tight
            prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-xl prose-img:shadow-lg
            prose-pre:bg-gray-900 prose-pre:shadow-md
          "
            >
              <MDXRemote
                source={content}
                options={{
                  mdxOptions: {
                    // 2. 把插件加到这里
                    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
                  },
                }}
              />
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
