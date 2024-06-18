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
      className="fixed bottom-0 right-0 p-4 md:p-10 "
      onClick={scrollToTop}
    >
      <IconArrowBarUp
        size={32}
        className="hover:bg-neutral-200 rounded-full   transition-all"
      />
    </button>
  );
}
