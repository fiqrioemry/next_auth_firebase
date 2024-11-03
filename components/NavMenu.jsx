import React from "react";
import Link from "next/link";
const NavMenu = () => {
  const Links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "about",
      path: "/about",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];
  return (
    <nav className="flex justify-between gap-x-2">
      {Links.map((item, index) => {
        return (
          <Link href={item.path} className="px-2 " key={index}>
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavMenu;
