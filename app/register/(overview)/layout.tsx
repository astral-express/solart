import type { Metadata } from "next";
import { RegisterNavBar } from "../../ui/navbar";

export const metadata: Metadata = {
  title: "Register",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <RegisterNavBar />
      <main>{children}</main>
    </div>
  );
}
