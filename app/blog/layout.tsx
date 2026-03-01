import Image from "next/image";
import { HeaderButton } from "@/app/page";
import Sidebar from "@/app/blog/components/Sidebar";
import Footer from "@/app/blog/components/Footer";
import Link from "next/link";
import { countCategory } from "./posts";
import BackButton from "@/app/blog/components/BackButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Header 区域 */}
        {/* 核心改动 1：保留 z-[999] 确保层级最高，增加 pointer-events-none 防止透明背景挡住下方的点击事件 */}
        <div className="fixed z-[999] top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-300 to-transparent flex justify-between items-center px-4 pointer-events-none">
          
          {/* 左侧：汉堡菜单 + 头像 + 名字 */}
          {/* 核心改动 2：加上 pointer-events-auto 恢复这块区域的点击响应 */}
          <div className="flex items-center gap-3 pointer-events-auto">
            <Sidebar categoryCount={countCategory()} />

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden bg-gray-200 shrink-0">
                <Image
                  src="/TouXiang.jpg"
                  alt="Profile Picture"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* 加了一点 drop-shadow 提升文字在复杂背景下的辨识度 */}
              <h1 className="text-xl font-black text-white tracking-tight drop-shadow-md">
                Zoolin
              </h1>
            </div>
          </div>

          {/* 右侧：玻璃拟态按钮区 */}
          {/* 核心改动 3：同样加上 pointer-events-auto */}
          <header className="flex justify-evenly px-3 py-1.5 gap-2 rounded-full bg-white/50 backdrop-blur-md shadow-xl border border-white/30 items-center shrink-0 pointer-events-auto">
            <BackButton />
            <Link href="/blog#首页">
              <HeaderButton name="首页" />
            </Link>
          </header>
        </div>

        <main className="flex-1 w-full">{children}</main>

        {/* 底部栏 */}
        <Footer />
      </div>
    </>
  );
}