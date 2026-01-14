import Image from "next/image";
import { HeaderButton } from "@/app/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/*Header */}
      <div>
        <div className="flex items-center gap-1 fixed top-0 w-full h-16 bg-gradient-to-b from-white to-transparent">
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
            <a href="#首页">
              <HeaderButton name="首页" />
            </a>
          </header>
        </div>
      </div>
      {children}
    </>
  );
}
