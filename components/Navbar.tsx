import { UserButton } from "@clerk/nextjs";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <>
      <header className="bg-white border-gray-200 border-b py-2 dark:bg-black">
        <div className="mx-auto w-full max-w-5xl px-8 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <img
                  src="/img/logo-light.svg"
                  alt="Cogito Logo"
                  className="dark:hidden"
                  width={100}
                  height={43}
                />
                <img
                  src="/img/logo-dark.svg"
                  alt="Cogito Logo"
                  className="hidden dark:block"
                  width={100}
                  height={43}
                />
              </a>
            </div>

            <div className="">
              <nav aria-label="Global">
                <ul className="flex items-center px-4 text-sm">
                  <li>
                    <a
                      className="text-black h-10 text-sm font-bold px-4 py-2 rounded-md hover:bg-slate-200 dark:text-white active:font-bold"
                      href="/"
                    >
                      Dashboard
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center">
              <div>
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
