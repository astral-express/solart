import Image from "next/image";
import { RotatingSunIcon } from "./ui/motion";
import { IconInputCursorMove } from "./ui/react-svg";
import { SignUp, Dashboard } from "./ui/actions";
import { IndexNavBar } from "./ui/navbar";

export default function Home() {
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
            src="/saturn_fjstudio_white_128x128.png"
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
            <SignUp />
            <div className="border-t md:border-l border-white px-40 sm:px-48 my-4 md:my-0 md:h-10 md:px-0 md:mx-4"></div>
            <Dashboard />
          </div>
        </div>
      </div>
    </main>
  );
}
