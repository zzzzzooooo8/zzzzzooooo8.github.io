export function ContactButton({
  image_svg,
  viewBox,
  link,
  textColor,
  hoverBgColor,
}: {
  image_svg: string;
  viewBox: string;
  link: string;
  textColor: string;
  hoverBgColor: string;
}) {
  return (
    <a href={link} target="_blank" className="block ">
      <button
        className={`${textColor} ${hoverBgColor} bg-white w-8 h-8 rounded-xl flex items-center justify-center shadow-md transition-all duration-300 cursor-pointer hover:text-white`}
      >
        <svg
          width="22"
          height="22"
          viewBox={viewBox}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          stroke="none"
        >
          <path d={image_svg} />
        </svg>
      </button>
    </a>
  );
}
