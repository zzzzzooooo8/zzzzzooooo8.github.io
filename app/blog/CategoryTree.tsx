"use client";

import { useState } from "react";
import Link from "next/link";
import { CategoryNode } from "./categoryData";

// --- 子组件：负责单个节点的渲染、状态管理和递归 ---
const CategoryItem = ({
  category,
  level,
  categoryCount,
}: {
  category: CategoryNode;
  level: number;
  categoryCount: Map<string, number>;
}) => {
  // 核心：每个 Item 独立管理自己的展开状态
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = category.children && category.children.length > 0;

  return (
    <li>
      <div className="flex items-center justify-between group py-1">
        <div className="flex items-center w-full gap-1">
          {/* 1. 箭头按钮：只在有子目录时显示 */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              mr-2 p-1 rounded-sm text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all
              ${hasChildren ? "visible" : "invisible"} 
            `}
            aria-label="Toggle submenu"
          >
            {/* SVG 箭头图标，根据 isOpen 旋转 */}
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

          {/* 2. 目录链接名称 */}
          <Link
            href={`/blog/category/${category.slug}`}
            className="text-gray-700 text-l scale-110 hover:text-[#468C37] hover:font-bold transition-colors block flex-1"
          >
            {category.name}
            <span>({categoryCount.get(category.name) || 0})</span>
          </Link>
        </div>
      </div>

      {/* 3. 子级递归：只有在 isOpen 为 true 时才渲染 */}
      {hasChildren && isOpen && (
        <CategoryTree
          categories={category.children!}
          level={level + 1}
          categoryCount={categoryCount}
        />
      )}
    </li>
  );
};

// --- 主组件 ---
export default function CategoryTree({
  categories,
  level = 0,
  categoryCount,
}: {
  categories: CategoryNode[];
  level?: number;
  categoryCount: Map<string, number>;
}) {
  if (!categories) return null;
  return (
    <ul
      className={`space-y-1 ${
        // 只有 level > 0 (子菜单) 才添加左侧边框和缩进，实现树形视觉线
        level > 0 ? "ml-2 pl-2 border-l border-gray-200" : ""
      }`}
    >
      {categories.map((ca) => (
        <div key={ca.slug}>
          <CategoryItem
            category={ca}
            level={level}
            categoryCount={categoryCount}
          />
        </div>
      ))}
    </ul>
  );
}
