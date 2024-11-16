"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const segment = pathname.split("/");
  const isWorkPage = segment[1] === "work";
  const isContactPage = segment[segment.length - 1] === "contact";
  const isHomePage = segment[segment.length - 1] === "";

  return (
    <nav className="h-16 flex justify-end w-full gap-9 px-14 items-center text-xl font-medium">
      <Link className={cn({ "text-[#FF6464]": isHomePage })} href={"/"}>
        Home
      </Link>
      <Link className={cn({ "text-[#FF6464]": isWorkPage })} href={"/work"}>
        Works
      </Link>
      <Link
        className={cn({ "text-[#FF6464]": isContactPage })}
        href={"/contact"}
      >
        Contact
      </Link>
    </nav>
  );
}
