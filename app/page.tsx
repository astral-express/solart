import Image from "next/image";
import Starfield from "./starfield";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.01}
        backgroundColor="black"
      />
    </main>
  );
}
