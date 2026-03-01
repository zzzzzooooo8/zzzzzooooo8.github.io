"use client";

import { useState } from "react";
import Link from "next/link";
import { CategoryNode } from "@/app/blog/categoryData";

// 定义 Props 类型
interface CategoryTreeClientProps {
  categories: CategoryNode[];
  counts: Record<string, number>; // 接收一个普通对象作为计数表
  level?: number;
}

const CategoryItem = ({
  category,
  counts,
  level,
}: {
  category: CategoryNode;
  counts: Record<string, number>;
  level: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = category.children && category.children.length > 0;

  return (
    <li>
      <div className="flex items-center justify-between group py-1">
        <div className="flex items-center w-full gap-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              mr-2 p-1 rounded-sm text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all
              ${hasChildren ? "visible" : "invisible"} 
            `}
            aria-label="Toggle submenu"
          >
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
                isOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <Link
            href={`/blog/category/${category.slug}`}
            className="text-gray-700 text-l scale-110 hover:text-[#468C37] hover:font-bold transition-colors block flex-1"
          >
            {category.name}
          </Link>

          <span className="text-xs text-gray-400 ml-2">
            {counts[category.name] || 0}
          </span>
        </div>
      </div>

      {hasChildren && isOpen && (
        <CategoryTreeClient
          categories={category.children!}
          counts={counts} 
          level={level + 1}
        />
      )}
    </li>
  );
};

export default function CategoryTreeClient({
  categories,
  counts,
  level = 0,
}: CategoryTreeClientProps) {
  if (!categories) return null;

  return (
    <ul
      className={`space-y-1 ${
        level > 0 ? "ml-2 pl-2 border-l border-gray-200" : ""
      }`}
    >
      {categories.map((ca) => (
        <CategoryItem
          key={ca.slug}
          category={ca}
          counts={counts}
          level={level}
        />
      ))}
    </ul>
  );
}
