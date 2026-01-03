import Image from "next/image";

function SkillButton({
  content,
  image_url,
}: {
  content: string;
  image_url: string;
}) {
  return (
    <button className="pl-4 pr-5 py-1 rounded-lg bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer">
      <Image src={image_url} alt="Image" width={18} height={18} />
      {content}
    </button>
  );
}

function ContactButton({
  image_svg,
  viewBox,
}: {
  image_svg: string;
  viewBox: string;
}) {
  return (
    <button className="bg-white group relative w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer">
      <svg
        width="30"
        height="30"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={image_svg} />
      </svg>
    </button>
  );
}

function CodePopover({ image_svg }: { image_svg: string }) {
  return (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden group-hover:block transition-all duration-300">
      <div className="bg-white p-2 rounded-lg shadow-xl border border-gray-100">
        <div className="w-32 h-43 bg-gray-100 flex items-center justify-center text-gray-400 text-xs rounded font-medium">
          <Image
            src={image_svg}
            alt="WeChat QR Code"
            width={128}
            height={128}
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-fill flex flex-col items-center text-center pt-15 relative">
        <Image
          src="/first-page.png"
          alt="Background"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="relative mb-6">
          <div className=" w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200">
            {/* 头像 */}
            <Image
              src="/TouXiang.jpg"
              alt="Profile Picture"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute bottom-0 right-0 text-2xl bg-white rounded-full p-1 shadow-md transform translate-x-1/4 translate-y-1/4">
            👋
          </div>
        </div>
        <h2 className="text-xl font-semibold text-white">Hello, I am</h2>
        <h1 className="text-5xl md:text-6xl font-black text-[#A1F7BF] tracking-tight">
          Zoolin
        </h1>
        <p className="max-w-2xl text-xl md:text-2xl text-white leading-relaxed mb-10">
          Welcome to my World!
        </p>
        <div className="flex items-center gap-30 mt-4">
          {/* QQ Button */}
          <div className="relative group">
            <ContactButton
              image_svg="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z"
              viewBox="0 0 448 512"
            />
            {/* QQ QR Code Popover */}
            <CodePopover image_svg="/QQ.png" />
          </div>
          {/* WeChat Button */}
          <div className="relative group">
            <ContactButton
              image_svg="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2.1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3"
              viewBox="0 0 612 512"
            />
            {/* WeChat QR Code Popover */}
            <CodePopover image_svg="/WeChat.jpg" />
            {/*Github Button */}
          </div>
          <ContactButton
            image_svg="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            viewBox="0 0 24 24"
          />
        </div>
      </div>

      {/*自我介绍 */}
      <div className="min-h-screen w-fill flex flex-col items-center text-center pt-15 relative">
        <Image
          src="/second-page.jpg"
          alt="Background"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="flex flex-col h-[70vh] w-[75vw] rounded-4xl bg-white/40  shadow-xl border border-white/30 items-center">
          <h1 className="my-8 text-3xl font-black text-[#A52A2A] tracking-tight">
            About me
          </h1>
          <h2 className="text-xl font-semibold text-[#6F4E37] px-8">
            I’m not particularly technical, so I’m not sure how to introduce
            myself. I’ll wait until I’ve gained more experience and clarity—then
            I’ll pick up the pen again
          </h2>
        </div>
      </div>

      {/*技能 */}
      <div className="min-h-screen w-fill flex flex-col items-center text-center pt-10 relative">
        <Image
          src="/third-page1.jpg"
          alt="Background"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="flex flex-col h-[70vh] w-[75vw] rounded-4xl bg-white/40  shadow-xl border border-white/30 items-center">
          <h1 className="my-8 text-3xl font-black text-[#EDA90B] tracking-tight">
            Skills in Learning
          </h1>
          <div className="relative group flex items-center justify-center gap-3 flex-wrap">
            <SkillButton content="JavaScript" image_url="/JS.svg" />
            <SkillButton content="HTML" image_url="/html.svg" />
            <SkillButton content="TypeScript" image_url="/ts.svg" />
            <SkillButton content="React" image_url="/react.svg" />
            <SkillButton content="TailwindCSS" image_url="/tailwind.svg" />
            <SkillButton content="Git" image_url="/git.svg" />
          </div>
        </div>
      </div>
    </>
  );
}
