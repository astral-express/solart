import NavLinks from "./nav-links";
import Image from "next/image";
import { NavbarSignUp, NavbarSignIn } from "./actions";
// import { signOut } from '@/auth'

export function NavBar() {
  return (
    <nav className="flex gap-6">
      <div className="navbar_links">
        <NavLinks />
      </div>
      <div className="navbar_headerButtons">
        <NavbarSignUp />
        <NavbarSignIn />
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
        <NavbarSignUp />
        <NavbarSignIn />
      </div>
    </nav>
  );
}
