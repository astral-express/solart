import Image from "next/image";
import { RotatingSunIcon } from "./ui/motion";
import { IconInputCursorMove } from "./ui/react-svg";
import Link from "next/link";
import { IndexNavBar } from "./ui/navbar";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <IndexNavBar />
      <div className="flex justify-center my-auto">
        <div className="hidden sm:flex flex-col justify-center items-center pr-1 pl-5">
          <div className="solart-circle">
            <RotatingSunIcon />
          </div>
          <div className="solart-trail"></div>
          <div className="solart-circle mt-1">
            <IconInputCursorMove />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-5">
          <Image
            src="/saturn_fjstudio_white_512x512.png"
            width={128}
            height={128}
            alt="Galaxy - Icon by Freepik"
          />
          <p className="text-7xl my-4">Solart</p>
          <p className="text-xl text-center my-4 italic max-w-2xl">
            Each star has it&quot;s own story and beauty, just like an art
            piece. Welcome to <strong>Solart</strong>, a universe where you can
            express your own world and story with your own hand strokes.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center align-baseline pt-8">
            <form
              action="/register"
              autoComplete="off"
              className="flex flex-col sm:flex-row"
            >
              <input
                className="h-10 rounded sm:rounded-r-none border border-indigo-700 py-[9px] text-center sm:text-left sm:pl-4 text-black outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Email address"
                accept="UTF-8"
                formMethod="post"
                required
              />
              <button className="h-10 rounded sm:rounded-l-none bg-indigo-700 px-4 font-medium text-white transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-700 mt-2 sm:mt-0">
                <span>Sign up to Solart</span>
              </button>
            </form>
            <div className="border-t md:border-l border-white px-[8rem] sm:px-48 my-4 md:my-0 md:h-10 md:px-0 md:mx-4"></div>
            <Link
              href="/dashboard"
              className="flex items-center h-10 rounded bg-indigo-700 px-4 font-medium text-white transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
            >
              <span>Browse dashboard anonymously</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
