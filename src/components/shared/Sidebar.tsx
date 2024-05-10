"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../../constants";
import { usePathname } from "next/navigation";
import { SignedOut } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href={"/"} className="sidebar-logo">
          <Image
            src={"/assets/images/logo-text.svg"}
            alt="logo"
            width={180}
            height={28}
          />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link, index) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={index}
                    className={`sidebar-nav_element group hover:cursor-pointer ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul>
              {navLinks.slice(6).map((link, index) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={index}
                    className={`sidebar-nav_element group hover:cursor-pointer ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button
              asChild
              className="button bg-purple-gradient bg-purple-gradient bg-cover"
            >
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
}
