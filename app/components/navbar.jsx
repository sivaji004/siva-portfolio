
"use client";

import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#fff] text-3xl font-bold"
          >
            SIVA
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 
          md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <Link href="/#about" className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#F4C430]">ABOUT</div>
            </Link>
          </li>

          <li>
            <Link href="/#experience" className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#F4C430]">EXPERIENCE</div>
            </Link>
          </li>

          <li>
            <Link href="/#skills" className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#F4C430]">SKILLS</div>
            </Link>
          </li>

          <li>
            <Link href="/#education" className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#F4C430]">EDUCATION</div>
            </Link>
          </li>

          <li>
            <Link href="/blog" className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#F4C430]">BLOGS</div>
            </Link>
          </li>

          <li>
            <Link href="/#projects" className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#F4C430]">PROJECTS</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
