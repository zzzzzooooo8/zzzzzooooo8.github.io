import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug } from "@/app/blog/posts";
import Image from "next/image";

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter, content } = getPostBySlug(slug);
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
      <div className="bg-white/70 max-w-4xl mx-auto mt-14">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
          <p className="text-gray-500">{frontmatter.date}</p>
          <article className="prose prose-lg dark:prose-invert">
            <MDXRemote source={content} />
          </article>
        </div>
      </div>
    </>
  );
}
