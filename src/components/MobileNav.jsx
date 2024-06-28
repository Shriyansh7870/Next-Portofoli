"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/Sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div>
          <div className=" mt-32 mb-40 text-center text-2xl">
            <Link href={"/"}>
              <h1 className="text-4xl font-semibold">
                Shriyansh <span className="text-accent">!</span>
              </h1>
            </Link>
            <nav className="flex flex-col justify-center gap-8 items-center mt-4">
              {links.map((link, index) => {
                return (
                  <Link
                    href={link.path}
                    key={index}
                    className={`${
                      link.path === pathname &&
                      "text-accent border-b-2 border-accent"
                    }text-xl  capitalize hover:text-accent transition-all`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
