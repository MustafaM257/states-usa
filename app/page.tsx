import Image from "next/image";
import Hero from "@/components/Hero";
import StateList from "@/components/StateList";
export default function Home() {
  return (
    <main>
      <Hero />
      <StateList />
    </main>
  );
}
