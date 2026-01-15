import Image from "next/image";

export default function AllCategory() {
  return (
    <>
      {/*背景 */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <Image
          src="/PostBg.jpg"
          alt="Background"
          fill
          className="object-cover -z-10 inset-0"
          priority
        />
      </div>
    </>
  );
}
