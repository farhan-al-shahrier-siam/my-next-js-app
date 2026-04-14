import Image from "next/image";
import { Changa } from "next/font/google";

const changa = Changa({
    weight: "400",
    subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${changa.className} flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black`}>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
      </main>
    </div>
  );
}
