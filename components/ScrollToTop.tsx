"use client";
import { IconArrowBarUp } from "@tabler/icons-react";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
export default function ScrollToTopButton() {
  return (
    <button
      onClick={scrollToTop}
      className=" fixed bottom-0 right-0 m-5 px-4 py-2 rounded-full border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
    >
      <IconArrowBarUp size={32} />
    </button>
  );
}
