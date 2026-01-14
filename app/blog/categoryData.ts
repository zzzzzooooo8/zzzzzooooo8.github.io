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
      {
        name: "FastAPI",
        slug: "fastapi",
        children: [{ name: "1", slug: "1", children: [] }],
      },
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

export function findNameBySlug(slug: string, categories: CategoryNode[]) {
    for (const ca of categories) {
        if (ca.slug === slug) return ca.name;
        if (ca.children.length) return findNameBySlug(slug, ca.children);
    }
}