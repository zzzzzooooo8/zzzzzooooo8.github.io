import Image from "next/image";
import { HeaderButton } from "@/app/page";
import Sidebar from "@/app/blog/components/Sidebar";
import Footer from "@/app/blog/components/Footer";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/*Header */}
        <div className="flex items-center gap-1 fixed z-10 top-0 w-full h-16 bg-gradient-to-b from-gray-300 to-transparent">
          <Sidebar />
          <div className="h-12 mx-2 flex justify-center items-center gap-2 ">
            <div className="w-12 h-12 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200">
              <Image
                src="/TouXiang.jpg"
                alt="Profile Picture"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-xl  font-black text-white tracking-tight">
              Zoolin
            </h1>
          </div>
          <header className="fixed right-1/35 flex justify-evenly px-2 py-1 gap-2 rounded-full bg-white/50  shadow-xl border border-white/30 items-center">
            <Link href="/blog#首页">
              <HeaderButton name="首页" />
            </Link>
          </header>
        </div>
        <main className="flex-1 w-full">{children}</main>
        {/*底部栏 */}
        <Footer />
      </div>
    </>
  );
}
