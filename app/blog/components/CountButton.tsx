export function CountButton({ name, count }: { name: string; count: number }) {
  return (
    <button className="w-10 h-15 bg-transparent flex flex-col justify-center items-center group">
      <div className="text-gray-500 scale-105 group-hover:text-black">
        {name}
      </div>
      <div className="text-gray-500 text-xl group-hover:text-black">
        {count}
      </div>
    </button>
  );
}
