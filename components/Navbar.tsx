"use client";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <header className=" border-gray-200 border-b py-2 ">
        <div className="mx-auto w-full max-w-5xl px-8">
          <div className="flex items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a href="/">
                <span className="sr-only">Home</span>
                <Image
                  src="/img/logo-light.svg"
                  alt="Cogito Logo"
                  className="dark:hidden"
                  width={100}
                  height={43}
                  priority
                />
                <Image
                  src="/img/logo-dark.svg"
                  alt="Cogito Logo"
                  className="hidden dark:block"
                  width={100}
                  height={43}
                  priority
                />
              </a>
            </div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref className="text-bold">
                    <NavigationMenuLink
                      active={pathname === "/"}
                      className={navigationMenuTriggerStyle()}
                    >
                      Trade
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="/dashboard"
                    legacyBehavior
                    passHref
                    className="text-bold"
                  >
                    <NavigationMenuLink
                      active={pathname === "/dashboard"}
                      className={navigationMenuTriggerStyle()}
                    >
                      Dashboard
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-6">
              <SignedOut>
                <SignInButton>
                  <Button className="shadow-sm bg-[#08e8de]  hover:bg-white hover:text-black  border-[1px] px-6 text-black border-[#08e8de] dark:bg-transparent  dark:text-white dark:hover:bg-[#08e8de] hover:dark:text-white shadow-[#08e8de]">
                    Sign in
                  </Button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>

              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
