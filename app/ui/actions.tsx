import Link from "next/link";

export function NavbarSignUp() {
  return (
    <Link
      href="/login"
      className="flex h-8 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors hover:text-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <span className="">Sign Up</span>{" "}
    </Link>
  );
}

export function NavbarSignIn() {
  return (
    <Link
      href="/register"
      className="flex h-8 items-center rounded-lg border border-indigo-700 px-4 text-sm font-medium text-white transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <span className="">Sign In</span>{" "}
    </Link>
  );
}

export function SignUp() {
  return (
    <form action="/register" autoComplete="off">
      <input
        className="h-10 rounded rounded-r-none border border-indigo-700 py-[9px] pl-4 text-black outline-2 placeholder:text-gray-500"
        id="email"
        type="email"
        name="email"
        placeholder="Email address"
        accept="UTF-8"
        formMethod="get"
        required
      />
      <button className="h-10 rounded rounded-l-none bg-indigo-700 px-4 font-medium text-white transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-700">
        <span>Sign up to Solart</span>
      </button>
    </form>
  );
}

export function Dashboard() {
  return (
    <Link
      href="/dashboard"
      className="flex items-center h-10 rounded bg-indigo-700 px-4 font-medium text-white transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
    >
      <span>Browse dashboard anonymously</span>
    </Link>
  );
}
