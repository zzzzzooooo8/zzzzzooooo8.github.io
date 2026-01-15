"use client";

import { useState } from "react";
import { Menu, FolderClosed } from "lucide-react";
import CategoryTree from "@/app/blog/CategoryTree";
import { categoryTree } from "@/app/blog/categoryData";

const SidebarContent = () => {
  return (
    <>
      <div className=" bg-transparent min-h-screen flex-col gap-15 mt-13">
        {/*目录 */}
        <div className="bg-white/80 rounded-md left-3">
          <div className="flex items-center gap-1 my-4 mx-4">
            <FolderClosed />
            <div className="text-xl text-gray-700 font-bold">分 类</div>
          </div>
          <div className="mx-8">
            <CategoryTree categories={categoryTree} />
          </div>
        </div>
      </div>
    </>
  );
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex  z-[100] p-2 backdrop-blur-md rounded-lg shadow-sm border border-gray-200 text-gray-500 active:scale-95 transition-transform"
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
          {/* 侧边栏 */}
          <div className="absolute top-0 h-full w-1/3 max-w-xs bg-white shadow-2xl p-6 flex flex-col animate-in slide-in-from-right duration-300">
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
}
