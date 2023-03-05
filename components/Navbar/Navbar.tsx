import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);
  const { theme, setTheme } = useTheme();
  return (
    <>
      <nav className="relative flex items-center justify-between bg-black p-5 py-4 text-xl font-extrabold text-white">
        <Link href={"/"}>
          <div
            className="font-normal hover:cursor-pointer"
            style={{ fontFamily: "Black Han Sans" }}
          >
            LCK 뷰
          </div>
        </Link>

        <div className="absolute left-1/2 flex -translate-x-1/2 space-x-4">
          <Link href={"/schedule"}>
            <span className="hover:text-gray-400">일정</span>
          </Link>
          <Link href={"/rank"}>
            <span className="hover:text-gray-400">순위</span>
          </Link>
          <Link href={"/roster"}>
            <span className="hover:text-gray-400">로스터</span>
          </Link>
        </div>
        <div className="rounded-md p-2 hover:cursor-pointer hover:bg-zinc-700">
          {loaded &&
            (theme === "white" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
                onClick={() => setTheme("dark")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
                onClick={() => setTheme("white")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
