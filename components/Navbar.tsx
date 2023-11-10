import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <>
      <header className="bg-white border-gray-600 border-b-2 dark:bg-black">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <img
                  src="/img/logo-light.svg"
                  alt="Cogito Logo"
                  className="h-12 dark:hidden"
                />
                <img
                  src="/img/logo-dark.svg"
                  alt="Cogito Logo"
                  className="h-12 hidden dark:block"
                />
              </a>
            </div>

            <div className="">
              <nav aria-label="Global">
                <ul className="flex items-center px-4 text-sm">
                  <li>
                    <a
                      className="text-black transition font-bold hover:text-gray-500/75 dark:text-white"
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
