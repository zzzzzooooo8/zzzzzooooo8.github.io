import Link from "next/link";

export interface CategoryNode {
  slug: string;
  name: string;
  children: CategoryNode[];
}

export const categoryTree: CategoryNode[] = [
  {
    name: "前端",
    slug: "frontend",
    children: [
      { name: "JavaScript", slug: "javascript", children: [] },
      { name: "TailwindCSS", slug: "tailwindcss", children: [] },
      { name: "HTML", slug: "html", children: [] },
      { name: "React", slug: "react", children: [] },
      { name: "Vue", slug: "vue", children: [] },
    ],
  },

  {
    name: "后端",
    slug: "backend",
    children: [
      { name: "Node.js", slug: "nodejs", children: [] },
      { name: "数据库", slug: "database", children: [] },
      { name: "FastAPI", slug: "fastapi", children: [] },
    ],
  },

  {
    name: "算法",
    slug: "algorithm",
    children: [
      { name: "排序算法", slug: "sorting", children: [] },
      { name: "搜索算法", slug: "searching", children: [] },
      { name: "图算法", slug: "graph", children: [] },
      { name: "动态规划", slug: "dynamic-programming", children: [] },
      { name: "贪心算法", slug: "greedy", children: [] },
      { name: "树算法", slug: "tree", children: [] },
    ],
  },

  {
    name: "AI",
    slug: "ai",
    children: [],
  },
];

export default function CategoryTree({
  categories,
  level = 0,
}: {
  categories: CategoryNode[];
  level?: number;
}) {
  if (!categories) return null;
  return (
    <ul
      className={`space-y-1 ${level > 0 ? "ml-4 border-l border-gray-200 pl-4" : ""}`}
    >
      {categories.map((ca) => (
        <li key={ca.slug}>
          <div className="flex items-center justify-between group">
            <Link
              href={`/blog/category/${ca.slug}`}
              className="text-gray-700 scale-105 hover:text-[#468C37] hover:scale-120 transition-colors block py-1"
            >
              {ca.name}
            </Link>
          </div>
          {ca.children && (
            <CategoryTree categories={ca.children} level={level + 1} />
          )}
        </li>
      ))}
    </ul>
  );
}
