"use client";

import { useState } from "react";
import { Menu, FolderClosed } from "lucide-react";
import CategoryTree from "@/app/blog/CategoryTree";
import { categoryTree } from "@/app/blog/categoryData";

const SidebarContent = ({
  categoryCount,
}: {
  categoryCount: Map<string, number>;
}) => {
  return (
    <div className="flex flex-col gap-6 mt-8">
      {/* 目录区域 */}
      <div className="bg-gray-50/80 rounded-xl p-4">
        {/* 标题部分 */}
        <div className="flex items-center gap-2 mb-4 px-2">
          <FolderClosed className="w-5 h-5 text-gray-600" />
          <div className="text-lg text-gray-800 font-bold tracking-widest">分类</div>
        </div>
        
        {/* 树形目录部分：去掉了夸张的 mx-8，改为适当的左侧内边距 */}
        <div className="px-2">
          <CategoryTree
            categories={categoryTree}
            categoryCount={categoryCount}
          />
        </div>
      </div>
    </div>
  );
};

export default function Sidebar({
  categoryCount,
}: {
  categoryCount: Map<string, number>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex z-[100] p-2 backdrop-blur-md rounded-lg shadow-sm border border-gray-200 text-gray-500 active:scale-95 transition-transform"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* 黑色罩幕 */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          {/* 侧边栏主体：
              1. 宽度改为 w-[280px]，这是一个非常标准的移动端抽屉宽度
              2. 定位改为 left-0
              3. 动画改为 slide-in-from-left，让它从左边顺滑贴出
          */}
          <div className="absolute top-0 left-0 h-full w-[280px] bg-white shadow-2xl p-4 flex flex-col animate-in slide-in-from-left duration-300 overflow-y-auto">
            <SidebarContent categoryCount={categoryCount} />
          </div>
        </div>
      )}
    </>
  );
}