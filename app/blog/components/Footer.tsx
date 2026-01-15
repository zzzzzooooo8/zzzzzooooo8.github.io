import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-white/90 py-2">
      <div className="flex flex-col justify-center max-w-4xl mx-auto">
        <span>Copyright © 2026 Zoolin</span>
        <span>
          This work is licensed under{" "}
          <Link href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
            CC BY-NC-ND 4.0
          </Link>
        </span>
      </div>
    </div>
  );
}
