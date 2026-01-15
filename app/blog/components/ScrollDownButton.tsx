"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function ScrollDownButton() {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToNext}
      aria-label="向下滚动"
      className="absolute bottom-15 left-1/2 -translate-x-1/2 
                        animate-bounce 
                        text-gray-200 hover:text-gray-500 
                        
                        z-10 cursor-pointer"
    >
      <ChevronDownIcon className="w-8 h-8" /> {/* 32px */}
    </button>
  );
}
