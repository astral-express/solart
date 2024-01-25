import NavLinks from "./nav-links";
import Image from "next/image";
import Link from "next/link";
// import { signOut } from '@/auth'
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export function NavBar() {
  return (
    <nav className="flex justify-between shrink-0 align-middle gap-6 border-b border-indigo-700 p-2 px-4">
      <div className="navbar_links">
        <NavLinks />
      </div>
      <div className="navbar_headerButtons">
        <Link
          href="/login"
          className="flex h-8 px-4 items-center rounded-lg text-sm font-medium text-white transition-colors hover:text-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <span className="">Sign Up</span>{" "}
        </Link>
        <Link
          href="/register"
          className="flex h-8 px-4 items-center rounded-lg border border-indigo-700 text-sm font-medium text-white transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <span className="">Sign In</span>{" "}
        </Link>
      </div>
    </nav>
  );
}

export function IndexNavBar() {
  return (
    <nav className="flex justify-between shrink-0 align-middle gap-6 border-b border-indigo-700 p-2 px-4">
      <div className="navbar_logo">
        <Image
          src="/saturn_fjstudio_white_512x512.png"
          width={32}
          height={32}
          alt="Galaxy - Icon by Freepik"
        />
      </div>
      <div className="flex gap-2 items-center">
        <Link
          href="/login"
          className="flex h-8 px-4 items-center rounded-lg text-sm font-medium text-white transition-colors hover:text-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <span className="">Sign Up</span>{" "}
        </Link>
        <Link
          href="/register"
          className="flex h-8 px-4 items-center rounded-lg border border-indigo-700 text-sm font-medium text-white transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <span className="">Sign In</span>{" "}
        </Link>
      </div>
    </nav>
  );
}

export function RegisterNavBar() {
  return (
    <nav className="flex justify-between shrink-0 align-middle gap-6 border-b border-indigo-700 p-2 px-4">
      <div className="navbar_logo">
        <Link href="/">
          <Image
            src="/saturn_fjstudio_white_512x512.png"
            width={32}
            height={32}
            alt="Galaxy - Icon by Freepik"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <span className="mr-4 text-sm text-zinc-400">
          Already have an account?
        </span>
        <Link
          href="/login"
          className="flex h-8 items-center rounded-lg text-sm font-medium text-white transition-colors hover:text-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <span className="">Sign Up</span>{" "}
        </Link>
        <ArrowLongRightIcon className="ml-1 w-5" />
      </div>
    </nav>
  );
}
