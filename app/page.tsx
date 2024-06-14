import Image from "next/image";
import Hero from "@/components/Hero";
import StateList from "@/components/StateList";
export default function Home() {
  return (
    <main className="space-y-10">
      <Hero />
      <StateList />
    </main>
  );
}
