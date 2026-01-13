"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type PropsType = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: PropsType) {
  const pathName = usePathname();
  const isActive = pathName === href || pathName.startsWith(`${href}/`);
  return (
    <Link
      className={`${
        isActive ? "underline" : "hover:cursor-pointer hover:underline"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
