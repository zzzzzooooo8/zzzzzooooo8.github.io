"use client"; // 必须有这行，标明它是客户端组件

import { useRouter } from "next/navigation"; // 注意：是 next/navigation，不是 next/router
import { HeaderButton } from "@/app/page"; // 替换为你 HeaderButton 的实际引入路径

export default function BackButton() {
  const router = useRouter();

  return (
    // button 标签原生支持 onClick 事件
    <button 
      onClick={() => router.back()} 
      className="cursor-pointer" // 确保鼠标放上去是个小手
    >
      <HeaderButton name="返回" />
    </button>
  );
}