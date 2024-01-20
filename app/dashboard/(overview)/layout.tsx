// import NavBar from "../../ui/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      {/* <NavBar /> */}
    </main>
  );
}
