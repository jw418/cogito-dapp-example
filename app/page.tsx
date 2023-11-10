import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

import Navbar from "@components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
        <h1 className="text-4xl font-bold text-center">Comming soon...</h1>
      </main>
    </>
  );
}
