"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="mx-auto md:flex min-h-screen max-w-5xl  md:flex-row md:space-x-4">
      <NavigationMenu className="md:items-baseline ">
        <NavigationMenuList className="md:flex w-full  items-start  p-4 md:w-48 md:flex-col md:p-8">
          <NavigationMenuItem>
            <Link href="/dashboard" legacyBehavior passHref>
              <NavigationMenuLink
                active={pathname === "/dashboard"}
                className={navigationMenuTriggerStyle()}
              >
                Overview
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/dashboard/kyc" legacyBehavior passHref>
              <NavigationMenuLink
                active={pathname === "/dashboard/kyc"}
                className={navigationMenuTriggerStyle()}
              >
                KYC
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/dashboard/addresses" legacyBehavior passHref>
              <NavigationMenuLink
                active={pathname === "/dashboard/addresses"}
                className={navigationMenuTriggerStyle()}
              >
                Addresses
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <section>{children}</section>
    </div>
  );
}
